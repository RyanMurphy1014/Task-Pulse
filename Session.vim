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
badd +53 staticAssets/loginStyles.css
badd +32 views/login.ejs
badd +28 infra/webServer/server.js
badd +2 ~/Dev/Task-Pulse/infra/webServer/routes/organization.js
badd +41 ~/Dev/Task-Pulse/infra/webServer/routes/login.js
badd +2 index.js
badd +1 ~/Dev/Task-Pulse/staticAssets/TaskPulseLogo.png
badd +54 infra/cli/clUi.js
badd +12 package.json
badd +0 man://property(7ssl)
badd +7 ~/Dev/Task-Pulse/infra/db/supabaseConnection.js
badd +14 ~/Dev/Task-Pulse/views/home.ejs
badd +1 ~/Dev/Task-Pulse/views/home.html
badd +1 ~/Dev/Task-Pulse/staticAssets/homeStyles.css
badd +13 ~/Dev/Task-Pulse/views/register.ejs
badd +5 ~/Dev/Task-Pulse/staticAssets/register.js
badd +5 ~/Dev/Task-Pulse/infra/webServer/routes/register.js
badd +1 ~/Dev/Task-Pulse/infra/webServer/routes/projects.js
argglobal
%argdel
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
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
