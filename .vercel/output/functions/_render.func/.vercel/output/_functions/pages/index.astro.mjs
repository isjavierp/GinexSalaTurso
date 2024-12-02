/* empty css                                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_CE0LrrUl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BWQJkiOx.mjs';
import 'clsx';
import { a as getMovies } from '../chunks/movies_BlNtnl1C.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-[547px] flex flex-col"> <div class="w-full relative flex flex-col items-center w-full h-full bg-auto bg-contain bg-no-repeat md:w-full sm:relative"> <img class="h-[517px] w-full object-cover" src="https://wallpapers.com/images/hd/movie-theater-background-2048-x-1536-9wlq655dcp63cdi8.jpg" alt="Logo"> <h1 class="absolute top-[30px] left-[32px] text-white text-[52px] font-bold md:top-[10%] sm:left-10 sm:absolute sm:text-[80px] sm:top-[10%]">
Sala Ginex
</h1> <p class="absolute top-[100px] left-[32px] text-white text-[32px] font-medium w-[80%] sm:top-[30%] sm:left-10 sm:absolute sm:text-[42px] sm:py-8 sm:leading-tight">
Paseo Libertador (Boulevard) Edificio Gilda
</p> <div class="w-auto absolute top-[225px] left-[32px] flex gap-2 mt-5 sm:w-full sm:top-[60%] sm:left-10 sm:absolute lg:top-[52%]"> <a class="text-[18px] text-center border border-current p-[10px] text-white transition ease-in duration-300 hover:bg-white hover:text-black font-bold rounded-[50px] sm:p-[25px] sm:w-[300px] sm:text-[25px]" href="/signin">Comprar Ticket</a> <button class="text-[18px] border border-current p-[10px] text-white transition ease-in duration-300 hover:bg-white hover:text-black font-bold rounded-[50px] sm:p-[25px} sm:w-[300px] sm:text-[25px]">Contacto</button> </div> <svg class="absolute text-white top-[70%] w-[64px] h-[64px] animate-bounce sm:top-[80%]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path> </svg> </div> </section>`;
}, "C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$MovieCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MovieCard;
  const { id, title, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/movies/${id}`, "href")} class="flex flex-col sm:w-[25%] sm:h-full gap-2"> <div class=""> <img class="w-full h-[85%]"${addAttribute(`https://image.tmdb.org/t/p/original/${img}`, "src")}${addAttribute(`${title} Poster`, "alt")}> <p class="text-white text-lg font-bold">${title}</p> </div> </a>`;
}, "C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/components/MovieCard.astro", void 0);

const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const movies_data = await getMovies();
  return renderTemplate`${maybeRenderHead()}<section class="h-auto bg-[#010739] w-full flex flex-col p-8" id="cartelera"> <h1 class="text-white text-[26px] font-bold">Cartelera de esta semana</h1> <div class="w-full flex flex-row gap-2 items-center pb-4 border-b"> <p class="text-white text-xl font-bold">Ver el </p> <select name="fechas" id="fechas" class="p-2 bg-[rgba(174,205,224,.15)] border-0 text-white font-bold"> <option value="1" class="bg-white text-black">Hoy, 23 Noviembre</option> <option value="2" class="bg-white text-black">Mañana, 24 Noviembre</option> <option value="3" class="bg-white text-black">Viernes, 29 de Noviembre</option> <option value="4" class="bg-white text-black">Sabado, 30 de Noviembre</option> <option value="5" class="bg-white text-black">Domingo, 01 de Diciembre</option> </select> </div> <div class="flex flex-col gap-5 pt-5 sm:w-full sm:h-auto sm:pt-5 md:flex sm:flex-row sm:flex-wrap sm:justify-center"> ${movies_data.map((movie) => renderTemplate`${renderComponent($$result, "MovieCard", $$MovieCard, { "title": movie.title, "img": movie.poster_path, "rate": movie.vote_average, "id": movie.id })}`)} </div> </section>`;
}, "C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/components/Slider.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sala Ginex \u{1F3A5}" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
