(()=>{"use strict";class e{constructor(e,a,t){this._title=e,this._img=a,this._link=t}get title(){return this._title}get img(){return this._img}get link(){return this._link}}const a=[new e("One Piece","https://images.mangafreak.net/mini_images/one_piece/80x127","https://w11.mangafreak.net/Manga/One_Piece"),new e("One Punch Man","https://images.mangafreak.net/mini_images/onepunch_man/80x127","https://w11.mangafreak.net/Manga/Onepunch_Man"),new e("Boku no Hero Academia","https://images.mangafreak.net/mini_images/my_hero_academia/80x127","https://w11.mangafreak.net/Manga/My_Hero_Academia"),new e("Boruto","https://images.mangafreak.net/mini_images/boruto_naruto_next_generations/80x127","https://w11.mangafreak.net/Manga/Boruto_Naruto_Next_Generations"),new e("Black Clover","https://images.mangafreak.net/mini_images/black_clover/80x127","https://w11.mangafreak.net/Manga/Black_Clover")],t=document.querySelector("#anime"),n=document.querySelector("#tabs");t.addEventListener("click",(()=>{t.classList.add("active"),n.classList.add("active"),(e=>{const a=document.querySelector("#content");let t,n;e.forEach((e=>{t=document.createElement("a"),t.type="image",t.classList.add("card"),t.href=e.link,n=document.createElement("img"),n.src=e.img,t.append(n),a.append(t)}))})(a)}),{once:!0})})();