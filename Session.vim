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
badd +37 views/login.ejs
badd +24 infra/webServer/server.js
badd +3 ~/Dev/Task-Pulse/infra/webServer/routes/organization.js
badd +50 ~/Dev/Task-Pulse/infra/webServer/routes/login.js
badd +4 index.js
badd +1 ~/Dev/Task-Pulse/staticAssets/TaskPulseLogo.png
badd +54 infra/cli/clUi.js
badd +12 package.json
badd +1 man://property(7ssl)
badd +4 ~/Dev/Task-Pulse/infra/db/supabaseConnection.js
badd +6 ~/Dev/Task-Pulse/views/home.ejs
badd +1 ~/Dev/Task-Pulse/views/home.html
badd +1 ~/Dev/Task-Pulse/staticAssets/homeStyles.css
badd +2 ~/Dev/Task-Pulse/views/register.ejs
badd +5 ~/Dev/Task-Pulse/staticAssets/register.js
badd +17 ~/Dev/Task-Pulse/infra/webServer/routes/register.js
badd +13 ~/Dev/Task-Pulse/infra/webServer/routes/projects.js
badd +3 staticAssets/scripts/register.js
badd +16 ~/Dev/Task-Pulse/infra/webServer/./routes/users.js
badd +2 ~/Dev/Task-Pulse/infra/webServer/./routes/task.js
badd +47 entities/organization.js
badd +2 .env
badd +7 infra/crypto/hasher.js
badd +1 ~/.local/state/nvim/lsp.log
badd +616 ~/.cache/typescript/5.3/node_modules/@types/express-serve-static-core/index.d.ts
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
