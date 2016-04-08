execute pathogen#infect()

syntax on
filetype plugin indent on

set term=screen-256color

"solarized
syntax enable
colorscheme monokai
"colorscheme github

"set number by default
set number
set mouse=a
set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab

set nocompatible              " be iMproved, required
filetype off                  " required

" Syntactic Linting
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_javascript_checkers = ['eslint']
"""""""""""""""""""""""""""""""""""""""""""""""

"vim-move customization
let g:move_key_modifier = 'C'
"""""""""""""""""""""""""""""""
autocmd FileType c,cpp,java,php,javascript,html,css autocmd BufWritePre <buffer> :%s/\s\+$//e
nnoremap <Leader>w <C-w>

"map :w to ctrl-s
"noremap <silent> <C-S>          :update<CR>
"vnoremap <silent> <C-S>         <C-C>:update<CR>
"inoremap <silent> <C-S>         <C-O>:update<CR>

"Control P
set runtimepath^=~/.vim/bundle/ctrlp.vim
let g:ctrlp_custom_ignore = '/node_modules/'
let g:ctrlp_user_command = ['.git', 'cd %s && git ls-files -co --exclude-standard']

"Powerline 
set  rtp+=/home/eric/.local/lib/python2.7/site-packages/powerline/bindings/vim/
set laststatus=2
set t_Co=256
"""""""""""""""""""""""""""""""""""

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'Valloric/YouCompleteMe'
Plugin 'flazz/vim-colorschemes'  "nice colors!
Plugin 'tpope/vim-surround'
Plugin 'tpope/vim-fugitive'
Plugin 'L9'
Plugin 'scrooloose/nerdtree'
Plugin 'pangloss/vim-javascript'
Plugin 'othree/jsdoc-syntax.vim'
Plugin 'scrooloose/syntastic'
Bundle 'matze/vim-move'
Plugin 'othree/html5.vim'
Plugin 'othree/html5-syntax.vim'
Plugin 'duggiefresh/vim-easydir'

"ColorSchemes
Plugin 'crusoexia/vim-monokai'
Plugin 'trusktr/seti.vim'
Bundle 'croaky/vim-colors-github'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
