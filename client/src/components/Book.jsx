import React from 'react'
import { Link } from 'react-router-dom';


function Book() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-br from-[#0b0d18] via-[#0f1224] to-[#0b0d18]">
      {/* Glassmorphism Card */}
      <div className="w-full max-w-md m-15 sm:max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-7 text-zinc-100">
        {/* Brand */}
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
          Mythra
        </h1>
        <p className="text-center text-zinc-400 mb-8 text-sm sm:text-base">
          Add a book to your journey 📚✨
        </p>


        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Book Title</label>
            <input
              type="text"

              className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>


          <div>
            <label className="block text-sm text-zinc-300 mb-1">Author</label>
            <input
              type="text"

              className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>


          <div>
            <label className="block text-sm text-zinc-300 mb-1">Genre</label>
            <input
              type="text"
              placeholder="Fantasy, Romance, Thriller..."
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>


          <div>
            <label className="block text-sm text-zinc-300 mb-1">Status</label>
            <select className="w-full px-4 py-3 
            rounded-lg bg-zinc-900/80 border border-white/10 
            focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="">
              <option value="" disabled className="text-zinc-400 bg-[#0b0d18]">Select Reading status</option>
              <option value="to-read" className='bg-[#0b0d18] hover:bg-[#7C3AED]'>📖 To Read</option>
              <option value="reading" className='bg-[#0b0d18]'>📘 Currently Reading</option>
              <option value="completed" className='bg-[#0b0d18]'>✅ Completed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">Your Rating</label>
            <select className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Rate this book</option>
              <option value="1">⭐ 1</option>
              <option value="2">⭐ 2</option>
              <option value="3">⭐ 3</option>
              <option value="4">⭐ 4</option>
              <option value="5">⭐ 5</option>
            </select>
          </div>


          <div>
            <label className="block text-sm text-zinc-300 mb-1">Notes</label>
            <textarea
              rows="3"
              placeholder="Your thoughts about this book..."
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
          >
            Add Book
          </button>
        </form>


        {/* Footer */}
        <p className="text-center text-zinc-400 mt-6 text-sm">
          <Link to="/books" className="text-yellow-400 hover:underline">
            ← Back to Books
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Book