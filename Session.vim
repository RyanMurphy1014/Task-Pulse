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
badd +1 staticAssets/homeStyles.css
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
