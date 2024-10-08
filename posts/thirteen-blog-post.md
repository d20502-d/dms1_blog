---
title: DMS Blog 13
published_at: 2024-09-16
snippet: title
disable_html_sanitization: true
allow_math: true
---
<font face="Times New Roman">
Week 8 Session 1
<a href="https://d20502-d-dms1-blog-38.deno.dev/twelfth-blog-post" class="button" style="margin-left:23em">◀︎ Previous Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://d20502-d-dms1-blog-38.deno.dev/fourteen-blog-post" class="button">Next Blog ▶︎</a>

# 3d environment progress

![](8/1.png)


It spends me a lot of time finding the models that i wanted and i didn't found any of them matches what i want so i ended up using the ones that seems to match closest to what i want and use blender to edit it (and i found that blender is harder than unity, there are soooo much windows and tools which is very unfriendly beginners!!!). although the product is the best that i can make in this limited time, i'm not really statisfied with the result. I also encounter a new problem as a import the model into unity, what i want is to have a tunnel that can goes down to the inside/bottom of the mountain, so the problem is that the mountain will turn transparrent from when the player goes into it. I solve this problem by finding other tunnel routes which is like a pipe and put them inside the mountain so it acts more like what i want. Then the biggest challenge comes, at the bottom of the mountain, i want the player to be able to look up to the top (the mountain is like a volcano with a hole at the top which means that people are able to see the sky at the bottom) and there will be a beam of moonlight shinning down with a shooting star pass by, at this point the the camera will shine black for a second simbolize the action of making a wish and after that there will be a lot of small lightballs surrounding the player and slowly lift the player up to the top of the mountain. So for the sky part, i had to give up because i didn't find out a way to change the sky depending on where the player is at and what i've planned is to have three part of sky changing, the first part is at the prairie and the forest, when player is at the prairie, it is daytime and when as they move closer to the forest the sun starts to set slowly and it became cloudly then when the player is about to enter the cave it becomes night time. The second part is the shooting star scene that i just meintioned above, then the third part is at the mountain top where the sun begins to rise. Then for the part that the lightballs lift the player, i didn't find a way to lift player up slowly like an elevator so i change to teleport player from the bottom to the top. For the light ball that can lead the player, my initial plan was that the light ball will always stay beside the player but i didn't find a way to make this happen which i think of an alternative way that is when the players arrives at the area the light ball of that area will appear and start to moving. This way kinda works but not exactly as the way that i think of. I use the particle system to set the particle and the path and uses trigger box so when the player pass through the light ball will appear but the particle sysgtem doesn't start at this point it already start moving at the start of the game. I solve this problem by trying out how much time does the player need to arrive the trigger area and set the light ball position at the point that when the player enters the trigger object, the light ball is also near them. 

![](8/2.png)

<br></br>
<a href="https://d20502-d-dms1-blog-38.deno.dev/twelfth-blog-post" class="button" style="margin-left:30.35em">◀︎ Previous Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://d20502-d-dms1-blog-38.deno.dev/fourteen-blog-post" class="button">Next Blog ▶︎</a>
</font>