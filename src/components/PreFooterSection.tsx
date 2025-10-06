import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Music, Newspaper } from 'lucide-react';

const topSongs = [
  "Pink Floyd - Time",
  "The Who - Baba O'Riley",
  "Raftaar, Yashraj - DEHSHAT HO",
  "Atif Aslam - In Dino",
  "Badfinger - Baby Blue",
  "Pink Floyd - Dogs",
  "Pink Floyd - Shine on You Crazy Diamond",
  "The Eagles - Hotel California",
  "Ben Howard - Promise",
  "Jagjit Singh - Kal Chaudhvin Ki Raat Thi",
];

const latestBlogs = [
  {
    title: "What influences Pigeon Droppings",
    description: "An exploration into the physics of projectile hitting a target, often useful for predicting ballistics",
    link: "https://blog.aryan.cfd/blogs/68cadfeebbe7b0b0c479d1b5"
  },
  {
    title: "Sobel Feldman Operator",
    description: "A deep dive into maths of finding the edges using Operator, with a follow-up blog featuring a Jupyter Notebook",
    link: "https://blog.aryan.cfd/blogs/670c382e188df56c3a6584da"
  },
  {
    title: "Why Gradient Descent Works",
    description: "A look into why does the most used optimization algorithm in Machine Learning work?",
    link: "https://blog.aryan.cfd/blogs/6653651641eb5dccc3396ea7"
  }
];

export function PreFooterSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-indigo-900/80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Favourite Songs Card */}
        <Card className="bg-black/20 border-blue-500/20 backdrop-blur-sm text-white">
          <CardHeader className="flex flex-row items-center gap-4">
            <Music className="w-8 h-8 text-cyan-300" />
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
              Favourite Songs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {topSongs.map((song, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-3">
                  <span className="text-gray-500 font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                  <span>{song}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Latest Blogs Card */}
        <Card className="bg-black/20 border-blue-500/20 backdrop-blur-sm text-white">
          <CardHeader className="flex flex-row items-center gap-4">
            <Newspaper className="w-8 h-8 text-purple-300" />
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">
              Latest Blogs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              {latestBlogs.map((blog, index) => (
                <li key={index}>
                  <a href={blog.link} className="group">
                    <h4 className="font-semibold text-lg text-gray-200 group-hover:text-white transition-colors">{blog.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{blog.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
