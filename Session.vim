let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Dev/Task-Pulse
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +75 staticAssets/loginStyles.css
badd +1 views/login.ejs
badd +35 infra/webServer/server.js
badd +3 infra/webServer/routes/organization.js
badd +15 infra/webServer/routes/login.js
badd +4 index.js
badd +54 infra/cli/clUi.js
badd +12 package.json
badd +1 man://property(7ssl)
badd +4 infra/db/supabaseConnection.js
badd +1 views/home.html
badd +102 staticAssets/homeStyles.css
badd +5 staticAssets/register.js
badd +11 infra/webServer/routes/register.js
badd +13 infra/webServer/routes/projects.js
badd +3 staticAssets/scripts/register.js
badd +16 infra/webServer/routes/users.js
badd +2 infra/webServer/routes/task.js
badd +47 entities/organization.js
badd +2 .env
badd +1 infra/crypto/hasher.js
badd +1 ~/.local/state/nvim/lsp.log
badd +616 ~/.cache/typescript/5.3/node_modules/@types/express-serve-static-core/index.d.ts
badd +25 views/login_invalidLogin.ejs
badd +12 views/home.ejs
badd +1 fugitive:///home/ryan/Dev/Task-Pulse/.git//
argglobal
%argdel
edit fugitive:///home/ryan/Dev/Task-Pulse/.git//
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 17 + 18) / 36)
exe '2resize ' . ((&lines * 16 + 18) / 36)
exe 'vert 2resize ' . ((&columns * 62 + 63) / 126)
exe '3resize ' . ((&lines * 16 + 18) / 36)
exe 'vert 3resize ' . ((&columns * 63 + 63) / 126)
argglobal
balt views/home.ejs
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 8) / 17)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("staticAssets/homeStyles.css", ":p")) | buffer staticAssets/homeStyles.css | else | edit staticAssets/homeStyles.css | endif
if &buftype ==# 'terminal'
  silent file staticAssets/homeStyles.css
endif
balt views/home.ejs
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 102 - ((13 * winheight(0) + 8) / 16)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 102
normal! 018|
wincmd w
argglobal
if bufexists(fnamemodify("views/home.ejs", ":p")) | buffer views/home.ejs | else | edit views/home.ejs | endif
if &buftype ==# 'terminal'
  silent file views/home.ejs
endif
balt staticAssets/homeStyles.css
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 15 - ((7 * winheight(0) + 8) / 16)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 15
normal! 0
wincmd w
exe '1resize ' . ((&lines * 17 + 18) / 36)
exe '2resize ' . ((&lines * 16 + 18) / 36)
exe 'vert 2resize ' . ((&columns * 62 + 63) / 126)
exe '3resize ' . ((&lines * 16 + 18) / 36)
exe 'vert 3resize ' . ((&columns * 63 + 63) / 126)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
