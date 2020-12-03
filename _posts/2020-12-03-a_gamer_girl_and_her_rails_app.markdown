---
layout: post
title:      "A Gamer Girl and Her Rails App"
date:       2020-12-03 18:57:01 +0000
permalink:  a_gamer_girl_and_her_rails_app
---


Where or where to begin. The holidays that are now upon us? The levels of frustration sometimes felt when learning to code? Life tribulations?

Let's start with the tribulations, and frustrations.

Some major life events happened, that caused extreme strife and worry; my extended family experienced house fire, and although the home is lost, I am just so grateful that there were no injuries! Now begins the process of rebuilding, and trying to help arrange moving what items are salvageable, while making sure that they are ok and don't over exhaust themselves. Talk about a kick in the pants to my anxiety levels!

So now, that my family is starting to move forward with everything that comes when your home is burned, it has come time for me to try to start to build my Rails project. Now if only I could focus!

After having such an easy time with my previous project, this one really knew how to throw me for a loop. I had so many questions, that I didn't quite know where to begin. Well, World of Warcraft: Shadowlands just released, so I've been playing that a lot; maybe I could build an app to track all of my characters!

* A user has many characters
* A character belongs to a user, a race, a class (career), and sooo many more things
	* They also have a name and a level
* A race has many characters, plus a faction, and a description
	* It also has many classes, through characters
* A class has many characters, plus a description 
	* It also has many races, through characters

Great, now I have an idea that just might work for my project! Even better, my relationships are all there! Now if you are familiar with World of Warcraft (WoW), you know that there is so much more complexity to a character than the simple relationships listed above; I had to make sure to stop myself from going completely overboard. After all WoW wasn't built in a day :wink:

![construction](https://media.giphy.com/media/Oa779jqqrpTJRa3m2t/giphy.gif)

I've got my project requirements checklist, I have my idea and it's relationships, now to just dive right in; starting with user & third party authentications!

Ok, now to remember how to set up Devise :grimacing: I know I've seen that walkthrough somewhere. After a bit of googling, and watching lectures, I think I've got it. Now to test it. Sweet, it works! But here comes OmniAuth, oh my! If memory serves me, this one is a bit of a bear. Best way to tackle it, I think, is like trying to complete a dungeon in WoW; one boss at a time (much like trying to eat an elephant).

After following the 'recipe' for OmniAuth - Github, I think I've got this one working too, and after testing, much to my surprise it works! Awesome, now I've got both authentications working, and can move on to the rest of my application!

*Imagine a tv show montage with great music, and zipping right along*

I've built my models, established their relationships, built my database, seeded it, I've got some of my views going, and my routes established.

Here comes the fun part, running the server to see what it is exactly that I've got so far. For me it's a bit cathartic seeing what I've put together, and how it changes when I futz with something in my code. On the other hand, it can be a little panic inducing when I make a small change that should've worked, and now it seems like 50 million things don't work; time to revert that one change, and research some more to find out where I went wrong.

After a lot of trial and error, I've checked off all of my requirements on my checklist, and although it's not very pretty view/design wise, I have a working application. I think that this calls for at least a small celebration!

Especially with the holidays that have just passed, and the ones to come, a celebration may be just the thing I need to help me relax and try to enjoy what little time I have with my family this year (thanks covid). I had a wonderful Thanksgiving, and I hope you did too!

The next time you see me, it may just be Christmas and New Year's; how exciting! Until then, may you and yours have a wonderful holiday season!

![it is the season of the heart #muppet christmas carol](https://media.giphy.com/media/3o6wrEoIF9OIEBdxLO/giphy.gif)
