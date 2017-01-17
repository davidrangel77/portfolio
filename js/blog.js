import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section className="sectionAll">
        <h1>Blog Posts by D Rangel</h1>
        <div>
          <h2>"Oh, the weekend…(1.4–1.6)"</h2>
          <p>
            So remember weekends? Those were fun when they were a thing.
            Our first big project was to take a design page (in this case a YouTube screenshot) and make it a functional webpage. On day 4. Having to rewrite our code from the wireframe day (see below) wasn’t so bad. It helped to rewrite it and make it cleaner and more concise. Of course I probably rewrote it a few more times in the course of the exercise as I had to group things and containers and divs and forms and lists and sections and wrappers and mains and asides and headers…you get the idea. Or maybe you don’t. I sure didn’t before last week. I mean I knew the code was there. I didn’t think little elves lived in my MacBook and Etch-A-Sketched pixels around instantaneously so make the magic pictures appear in my browser. I had, on occasion, accidentally hit Cmd-Shift-C and a window popped open and showed me the “magic” of the front-end of the internet. But it didn’t really mean anything other than as a necessary concept to a function. And all I cared about, or respected, was the function.
            I think differently after this weekend.
        </p>
        </div>
        <div>
          <h2>"I should have been blogging…and now it’s an assignment…"</h2>
          <p>
            I was thinking over the holidays that if I wasn’t going to be able to do much work I should at least blog. And I didn’t and here we are, the second day back in class from our break and it’s a morning assignment. A sign I should have been blogging regularly as I planned? Probably not. But I’ll take it that way and start to make it habit again.
            To be honest I had backburnered (that’s not a word) daily blogging in week 2 after having to spend so much time on homework assignments daily that I was enjoying working on those things, not writing about it. It seemed a bit redundant to do the work and then tell a mystery audience that I had done it.
            But having had a week off and diving right back into new concepts in week 5 of class I want to take it up again. It makes sense. While I think it’s a stretch to say it directly relates to the code and processes I’m learning, part of what we are doing this week is the beginning of TDD (test driven development) and it seems relevant. TDD is the process of writing tests before actually producing code so that you are only producing code that satisfies the tests. Then you write more tests and more code until the task or job is wholly completed. Blogging is the reverse of that. It’s a review of what has been done, with the benefit of hindsight and practice. Both are important: test and review. Writing down what I’ve learned, or even what I’ve felt going through this experience is something that will keep me focused, I think. A way to document how far we have come learning a new language and skill, as well as a literal daily review of material, even if it’s just to pass an anecdote.
            Thanks for the reminder: I’ll get back on track with it.
          </p>
        </div>
        <div>
          <h2>"Day 1 Blog Post, part 2 (1.1.2)"</h2>
          <p>
            I didn’t finish this post yesterday because, simply, I got distracted waiting for traffic to die down leaving Pearl and then busy making the lunch I forgot today, so I’ll continue in the bit of time we have left during lunch here on 1.2. For future reference (for us both) the “1” in 1.2 is the week, and the “2” in 1.2 is the day. Jason (our instructor) is designating the lessons in this week.day format so it will be easy to look back on it and figure out where and when these posts fit into the course. But back on track…
            The end of day one was a grand success in that the 8 person class is cohesive and working together. No one is terribly shy about answering aloud or asking questions, which is great for people that have a hard time asking questions and for future exercises where working more closely with people will be part of the exercise. It wasn’t a terribly hard day of learning, but it was a very productive day on the whole. I can’t say we’re looking forward to today…only because it’s already today. And that’s a separate post.
          </p>
        </div>
        <Footer/>
      </section>
    )
  }
})
