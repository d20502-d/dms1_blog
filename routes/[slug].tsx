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
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style dangerouslySetInnerHTML={{ __html: KATEX_CSS }} />
      </Head>
      <h2>
         <p> |</p>
        <a href="https://d20502-d-dms1-blog-38.deno.dev/first-blog-post">  001</a>  |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/second-blog-post"> 002</a>  |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/third-blog-post"> 003</a>  |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/fourth-blog-post"> 004</a>  |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/fifth-blog-post"> 005</a>  |
      </h2>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">{post.title}</h1>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>



        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content, {
            disableHtmlSanitization: post.disableHtmlSanitization,
            allowMath: post.allowMath,
          }) }}
        />

      <br>          |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/first-blog-post">  001</a>  |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/second-blog-post">  002</a>  |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/third-blog-post"> 003</a>  |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/fourth-blog-post"> 004</a>  |
        <a href="https://d20502-d-dms1-blog-38.deno.dev/fifth-blog-post"> 005</a>  |</br>
<br></br>
      </main>
    </>
  );
}
