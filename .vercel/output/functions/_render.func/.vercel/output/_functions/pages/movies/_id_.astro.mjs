/* empty css                                             */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CE0LrrUl.mjs';
import 'kleur/colors';
import { g as getMoviesById } from '../../chunks/movies_BlNtnl1C.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BWQJkiOx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let data;
  if (id) {
    data = await getMoviesById({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.title} Movie` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="post" class="w-full h-full py-5 px-7 flex flex-col justify-center sm:w-[40%] sm:mx-auto"> <img${addAttribute(`https://image.tmdb.org/t/p/original/${data.poster_path}`, "src")}${addAttribute(`${data.title} Poster`, "alt")} class="sm:w-full"> <div class="w-full flex justify-between mt-2"> <p class="text-white text-xl font-bold">${data.title}</p> <span class="flex items-center"> <p class="text-[#ccc] text-md font-bold">${data.vote_average}</p> ${renderComponent($$result2, "ion-icon", "ion-icon", { "name": "star-half-outline", "class": " text-white ml-2" })} </span> </div> <p class="text-white mt-2 font-medium">${data.overview}</p> <div class="text-white w-full mt-8 flex gap-2 mb-2 items-center justify-between"> <div> <label for="number-ticket" class="text-md font-medium sm:text-xl">Tickets:
</label> <input type="number" name="number-ticket" class="bg-transparent  border"> </div> <small class="text-white text-[12px] font-bold sm:text-xl">Precio: 2$</small> </div> <div class="w-full mt-8 mb-2"> <button class="text-[14px]  text-center border border-current p-4 text-white transition ease-in duration-300 hover:bg-white hover:text-black font-bold rounded-[10px] sm:p-[15px] sm:w-[200px] sm:text-[20px]">Comprar ticket</button> </div> </form> ` })} `;
}, "C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/movies/[id].astro", void 0);

const $$file = "C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/movies/[id].astro";
const $$url = "/movies/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$id,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
