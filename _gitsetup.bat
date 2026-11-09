@echo off
cd /d "c:\Users\david\Desktop\Front  Proyecto"
git config user.email "fajardojuan402@users.noreply.github.com"
git config user.name "fajardojuan402-pixel"
git add -A
git commit -m "SPAZIO: frontend y backend"
git branch -M main
echo ---LOG---
git log --oneline
echo ---REMOTE---
git remote -v
