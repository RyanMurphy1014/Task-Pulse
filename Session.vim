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
badd +37 staticAssets/loginStyles.css
badd +1 views/login.ejs
badd +58 infra/webServer/server.js
badd +3 ~/Dev/Task-Pulse/infra/webServer/routes/organization.js
badd +12 ~/Dev/Task-Pulse/infra/webServer/routes/login.js
badd +4 index.js
badd +1 ~/Dev/Task-Pulse/staticAssets/TaskPulseLogo.png
badd +54 infra/cli/clUi.js
badd +12 package.json
badd +1 man://property(7ssl)
badd +4 ~/Dev/Task-Pulse/infra/db/supabaseConnection.js
badd +10 ~/Dev/Task-Pulse/views/home.ejs
badd +1 ~/Dev/Task-Pulse/views/home.html
badd +1 ~/Dev/Task-Pulse/staticAssets/homeStyles.css
badd +1 ~/Dev/Task-Pulse/views/register.ejs
badd +5 ~/Dev/Task-Pulse/staticAssets/register.js
badd +11 ~/Dev/Task-Pulse/infra/webServer/routes/register.js
badd +13 ~/Dev/Task-Pulse/infra/webServer/routes/projects.js
badd +3 staticAssets/scripts/register.js
badd +16 ~/Dev/Task-Pulse/infra/webServer/./routes/users.js
badd +2 ~/Dev/Task-Pulse/infra/webServer/./routes/task.js
badd +47 entities/organization.js
badd +2 .env
badd +1 infra/crypto/hasher.js
badd +1 ~/.local/state/nvim/lsp.log
badd +616 ~/.cache/typescript/5.3/node_modules/@types/express-serve-static-core/index.d.ts
badd +15 ~/Dev/Task-Pulse/views/login_invalidLogin.ejs
argglobal
%argdel
edit infra/webServer/server.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt infra/crypto/hasher.js
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
let s:l = 58 - ((16 * winheight(0) + 17) / 34)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 58
normal! 026|
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
