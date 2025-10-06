import cv2
import numpy as np
import os

print("Starting background removal script... 🖼️")

# --- Configuration ---
# You can tweak this tolerance value. A higher value means a wider range of
# colors will be considered part of the background.
TOLERANCE = 30

# --- Define Background Color Ranges in BGR format ---
# Note: OpenCV uses BGR (Blue, Green, Red) instead of RGB.

# Gray tile color: #dee0df -> BGR(223, 224, 222)
gray_color = np.array([223, 224, 222])
lower_gray = np.clip(gray_color - TOLERANCE, 0, 255)
upper_gray = np.clip(gray_color + TOLERANCE, 0, 255)

# White tile color: #f4f6f6 -> BGR(246, 246, 244)
white_color = np.array([246, 246, 244])
lower_white = np.clip(white_color - TOLERANCE, 0, 255)
upper_white = np.clip(white_color + TOLERANCE, 0, 255)


# --- Main Processing Logic ---

def remove_background(image_path, output_path):
    """
    Removes the specified color ranges from an image and saves the result.
    """
    # Read the image, keeping the alpha channel if it exists
    image = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)

    if image is None:
        print(f"⚠️  Could not read image: {image_path}")
        return

    # If the image has 4 channels (BGRA), convert to BGR for masking
    if image.shape[2] == 4:
        bgr_image = cv2.cvtColor(image, cv2.COLOR_BGRA2BGR)
    else:
        bgr_image = image

    # Create masks for the gray and white color ranges
    gray_mask = cv2.inRange(bgr_image, lower_gray, upper_gray)
    white_mask = cv2.inRange(bgr_image, lower_white, upper_white)

    # Combine the masks to identify all background pixels
    combined_mask = cv2.bitwise_or(gray_mask, white_mask)

    # Invert the mask to get the foreground
    foreground_mask = cv2.bitwise_not(combined_mask)

    # Create a 4-channel BGRA image
    result_rgba = cv2.cvtColor(bgr_image, cv2.COLOR_BGR2BGRA)

    # Apply the foreground mask to the alpha channel
    # The mask is what we want to keep, so it becomes the new alpha channel
    result_rgba[:, :, 3] = foreground_mask

    # Save the final image with a transparent background
    cv2.imwrite(output_path, result_rgba)
    print(f"✅ Processed '{os.path.basename(image_path)}' -> Saved as '{output_path}'")


if __name__ == "__main__":
    # Get a list of all PNG files in the current directory
    # This also excludes any files that might already be processed
    png_files = [
        f for f in os.listdir('.') 
        if f.lower().endswith('.png') and not f.lower().endswith('_transparent.png')
    ]

    if not png_files:
        print("❌ No new PNG files found to process in the current directory.")
    else:
        # Process each PNG file
        for filename in png_files:
            input_path = filename
            
            # Construct the new output filename
            base_name = os.path.splitext(filename)[0]
            output_filename = f"{base_name}_transparent.png"
            
            remove_background(input_path, output_filename)

    print("\n✨ All done!")
