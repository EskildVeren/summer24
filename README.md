# Summer project 2024

## Project intro

This is my summer project for 2024. I dont know what it is yet, but it will be something to keep me entertained while im stuck in Trondheim this summer. I already have a few thoughts on what I want it to contain. I want to create a web application, where job inteviewers easily can see my work. This will require both a frontend and a backend.

For the frontend I will probably use react. This is because I am already familiar with react, but I want to keep o improving my skills. I am very unsure about the backend, but I want to either use mongoDB or postgres, depending on what my backend will require. This is because I want to explore both technologies. It will either be hosted in the cloudor by an old laptop.

I have a few thoughts on what the project may be. For one, it would be nice to be somethingthat can host my cv. I think that a blogsite might be suitable for this. I might just blog about food because that is what I am the most passionate about. While my food blogging might not be relevant for job interviews, I hope that I can impress some interviewers with the quality of my work. I dont think that giving them a great pasta recipe will hurt either.

## Update

I think I might want to create a html canvas poker game instead. This gives the opportunity to play around with the canvas element and maybe create some sort of backend with something AI-ish. I dont want to implement multiplayer, so this would make it more fun to play all alone. Got inspired when they player poker in How I Met Your Mother. Problem is that I need somewhere to blog about my game. Might have to create the website above first

## 11.06; My plan moving forwards this summer

I have decided that I want my app to contain a backend using Kotlin.
I want to create a back end from the ground up, since I got an interest in back-end work during my bachelor project. Many comapnies I am interested in working for use Kotlin/Java for the backend, and I have been interested in trying Kotlin for a while now. In order to learn Kotlin, I wil create some miniprojects in this repo, such as a calculator app and a basic todo list.

## 12.06; Finishing the calculator

Typing this at 2.19 am. I have worked and socialized with my family throughout the evening (and night), and I am now happy with the calculator, which is the first of (hopefully) several mini-projects in kotlin. It don't know if the development of this README file becoming a blog is a good idea, but it is all I have since I haven't gotten to finishing my website yet.

## 15.06; Learning Jetpack Compose

It turns out that these mini-projects seren't as easy as I thought. During the creation of a TaskManager app, I stumbled upon a problem. I don't know how to build UIs using Kotlin. I will therefore allocate some time to learn Jetpack Compose. It might not be the most relevant to learn for my career path, but it will help me to learn Kotlin. Today I am halfway through their [course](https://developer.android.com/codelabs/jetpack-compose-state#0) regarding state management, and will hopefully complete it soon. Unfortunately, I will soon go on a canoeing trip, which will force me to pause my coding project. Still, I will have fun paddeling around in my canoe.

## 21.06; Finishing WaterCounter

I survived the canoe trip! It took some time to recover, but I also finished the [Jetpack Compulse course](https://developer.android.com/codelabs/jetpack-compose-state#0) on how to manage state, through programming the WaterCounter program. I will now continue on the task manager app to further learn Kotlin.

## 27.06; Done with TaskManager

I finally finished TaskManager. It was not perfect, and it does not save the tasks locally on the device, BUT it does work. You can add, edit or delete tasks. It does not look good. I am getting a bit bored of developing android apps, and I feel like I have gotten my intro to Kotlin. Thus I may start searching for a fun project with clear goals, such that I will actually work on it, and maybe even finish it. I will travel to and stay in Trondheim for about a week, which will either make me a super effective programmer, or this README won't be updated for a while. Only time will tell...

## 12.07; Effective programmer?

Sooooooo

Turns out that locking myself in an apartment with a computer that is strong enough for gaming, isn't a good way to make me code more. This was the biggest timesink in the beginning, but later I was held back because I needed to pack my stuff and wash the appartment. I'm moving! Where? I'm going back to Oslo. I also think that I found something fun to code that is completely irrelevant from the app development I did earlier. Since highschool, I have been interested in creating games using the HTML canvas. One problem I have had is that this usually is done using JavaScript, but I want to use TypeScript. The problem I have met earlier using TypeScript is the lack of support for import/exporting for client-side javascript. Therefore I use webpack for this project to compile the code into code the browsers actually can use. In the urrent setup, my TypeScript code is compiled into JavaScript code, which again is compiled by webpack. Yippi

I haven't tested it thoroughly yet, but I will probably do it in the following days.

## 11.08; Life happens

Many personal problems rose up after moving, so I haven't had any motivation to code. I abandoned my old canvas game project, in favor of two other projects. The first I want to keep a secret for now, but the second one is already in this repository. I am using the setup from my old canvasgame, and applying it to create chess using the canvas. Development is going forwards, and I am very happy with the progress. TypeScript + webpack makes everything much faster to code, and more comfortable to work with, while not making the tech stack overly complicated. Still, I will need to stick to this project in order to actually finish something this summer. I feel like it is done when "en passant" finally is coded into the game.

## 18.08; Time moves fast

I feel like I just started with chess, but an entire week has already passed. Was on holiday in Sarpsbord, which was nice for relaxation. Not as nice for my game. Implemented moving pieces today, which was more difficult than expected. I had to really break down the different gamestate and how I would progress to each one. As mnay problems this came down to thinking about what possible inputs there were, and finding out what output to expect. It is still a little buggy, but that is a problem for future me.

## 20.08; Continuing with chess

Today I have coded in most of the chesspieces' movements. The only ones I miss are pawns and castling. I thought I was almost done earlier today, but then I remembered the 90/90 rule; when you think you are 90% done with a project, 90% remains. The moves I haven't implemented yet are the hard ones, and I have not started checking for cheks or winconditions yet. Additionally, I am considering continuing this project by creating a server I can host myself that will enable online play. Still, I am happy with today's progress

## 21.08; Drawing chesspieces

I have started drawing chess pieces, so every one of them doesn't look the same. This turned out to be both easier and harder than I thought it would be. I am happy with the rook, because it looks a bit cartoonish. Still, most of the pieces remain. I also got the image drawing in the canvas working, but had to ignore typescript in one line. I will try to find a method for not doing this, but it works at the moment. I have set up an error that will pop up if something goes wrong, which I think justifies ignoring TypeScript for that one line until I know how to check the type of an html element.

## 24.08 Part 1; Finishing all chesspieces

Today, I finished drawing all chesspieces. It actually made the whole game fel better. The chesspieces may not be the most pretty, and the king is a bit tiny, but I think they have a certain charm. There is also an issue that all pieces have the same color, but I will try to fix that once I know why the pieces have such a bad resolution as a SVG

## 24.08 Part 2; Pawns are complicated

Title says it; Pawns are a hell to program. After an hour and a half, I have finally gotten it to work (a bug came to mind while writing that sentence. It is now fixed). I have to slep on how I want to implement en passant, and I will probably need to rewrite some of my code from this evening (I am not happy with the way two of my if-sentences were nested). It is now 23:56, and I will therefore sleep on it. OH MY GOD HOW AM I GOING TO DO PAWN PROMOTIONS ON A HTML CANVAS!!!!!!!
