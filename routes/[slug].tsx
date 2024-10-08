import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { CSS, KATEX_CSS, render } from "$gfm";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = await getPost(ctx.params.slug);
      return ctx.render(post as Post);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <><font face="Times New Roman"><Head>
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <style dangerouslySetInnerHTML={{ __html: KATEX_CSS }} />
  </Head>
  <h2>
  <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/first-blog-post" class="text-gray-600">001</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a>  
    <a href="https://d20502-d-dms1-blog-38.deno.dev/second-blog-post" class="text-gray-600">002</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/third-blog-post" class="text-gray-600">003</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/fourth-blog-post" class="text-gray-600">004</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/fifth-blog-post" class="text-gray-600">005</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/sixth-blog-post" class="text-gray-600">006</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/seventh-blog-post" class="text-gray-600">007</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/eighth-blog-post" class="text-gray-600">008</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/ninth-blog-post" class="text-gray-600">009</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/tenth-blog-post" class="text-gray-600">010</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/eleventh-blog-post" class="text-gray-600">011</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/twelfth-blog-post" class="text-gray-600">012</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/thirteen-blog-post" class="text-gray-600">013</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/fourteen-blog-post" class="text-gray-600">014</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/fifteen-blog-post" class="text-gray-600">015</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/sixteen-blog-post" class="text-gray-600">016</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/seventeen-blog-post" class="text-gray-600">017</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
  </h2>
  <main class="max-w-screen-md px-4 pt-16{padding-top: 2rem;} mx-auto">
    <a href="https://d20502-d-dms1-blog-38.deno.dev/content">
    <h1 class="text-5xl font-bold">{post.title}</h1>
    </a>
   
    <time class="text-gray-500">
      {new Date(post.publishedAt).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>



    <div
      class="mt-8{margin-top: 0rem;} markdown-body"
      dangerouslySetInnerHTML={{ __html: render(post.content, {
        disableHtmlSanitization: post.disableHtmlSanitization,
        allowMath: post.allowMath,
      }) }}
    />

  </main>
  <br></br>
  <h2>
  <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/first-blog-post" class="text-gray-600">001</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a>  
    <a href="https://d20502-d-dms1-blog-38.deno.dev/second-blog-post" class="text-gray-600">002</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/third-blog-post" class="text-gray-600">003</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/fourth-blog-post" class="text-gray-600">004</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/fifth-blog-post" class="text-gray-600">005</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/sixth-blog-post" class="text-gray-600">006</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/seventh-blog-post" class="text-gray-600">007</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/eighth-blog-post" class="text-gray-600">008</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/ninth-blog-post" class="text-gray-600">009</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/tenth-blog-post" class="text-gray-600">010</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/eleventh-blog-post" class="text-gray-600">011</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/twelfth-blog-post" class="text-gray-600">012</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/thirteen-blog-post" class="text-gray-600">013</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/fourteen-blog-post" class="text-gray-600">014</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/fifteen-blog-post" class="text-gray-600">015</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/sixteen-blog-post" class="text-gray-600">016</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
    <a href="https://d20502-d-dms1-blog-38.deno.dev/seventeen-blog-post" class="text-gray-600">017</a>
    <a class="text-gray-300">&nbsp;|&nbsp;</a> 
  </h2>
  <br></br>
  </font> 
    </>
  );
}
