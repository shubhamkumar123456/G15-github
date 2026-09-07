// Git: Git is a tool that helps you save, track, and manage changes in your code or files.

// 👉 In easy language:
// Git is like a time machine for your project.
// It remembers every change you make, so you can go back to old versions, fix mistakes, and work with others safely.

// Simple definition:
// Git is a version control system used to track changes in files and help multiple people work on the same project without confusion.

// ________________________________________________________________________________________________________________________

// GitHub: Github is a website where you store your Git projects online.

// 👉 In easy language:
// GitHub is like Google Drive for your code, but with extra features for developers.

// Simple definition:
// GitHub is an online platform that stores Git repositories and helps people share, manage, and work together on code.

// Real-life example:
// Git → saves versions of your project on your computer
// GitHub → stores that project on the internet so others (or you) can access it from anywhere 🌍

// Why GitHub is used:
// Backup code online
// Share code with others
// Work together in a team
// Show projects to companies (portfolio)

// Download git (visit the website and download) --> https://git-scm.com


// ______________________________________________________________________________________________________________________________________

//*************************************git Commands*************************
//1) create folder --> mkdir folderName

//2) open folder in pc similar to double click --> start.

//3) open folder in cmd -->dir or ls(on mac)

//4)initialze a empty git repository --> git init 

//5)show hidden file --> dir /a  or ls -a

//6)create a new file --> echo>fileName  or touch fileName

//7)check history What changed in my project ? ”  --> git status
//          It tells you:
//          Which files are new
//          Which files are modified
//          Which files are staged (ready to commit)
//          Which files are not being tracked
//          Which branch you are on    

//8) add a file in staging area --> git add fileName

//9) add all files  --> git add .

//10)Saving your project permanently with a message (take a snapshot of your changes or project) --> git commit -m "your messasge"

//11)Removes a file from Git tracking BUT keeps it on your computer -->git rm --cached fileName or git rm -rf fileName
            // Here is exactly what happens when you run git rm -rffileName:
            
            // -r (Recursive): This is necessary if fileName is actually a folder. It tells Git to go inside the folder and remove everything in it.
            
            // -f (Force): This bypasses Git’s safety checks. Normally, if you have changes in a file that haven't been committed yet, Git will block the deletion to prevent you from losing work. The -f tells Git, "I know what I'm doing, delete it anyway.
            
            // "When to use which?
            // If you want to delete                        Use this command
            // A single file                                git rm fileName
            // A folder and everything in it                git rm -r           folderName
            // Something that Git is "blocking"             git rm -f fileName
            // A folder, even if it has unsaved changes     git rm -rf folderName

//9) open text file in terminal --> vi fileName
            // vi is a terminal-based text editor.
            // It lets you create, open, edit, and save files directly from the command line without using a mouse.
//10) exit the terminal-based text editor --> ESC and then :wq and hit enter
    // Cat fileName --> show available text of file
    // if dont work edit file manually by double click
    // check git status again

//11)show all commits history --> git log

//12)if you want to remove new commits from log (you have done by mistake) and move on to the previous commit only (you want only older commit stay ) --> git reset commitId

//13) git stash --> 
    // What it does:
        // Takes your dirty changes (the stuff you haven't committed yet).
        // Hides them away in a secret storage area.
        // Cleans your project back to the way it looked at the last save.
//14) git stash pop -->Restores your work: The messy changes you hide earlier reappear in your files.

//15) git stash clear --> In simple words, git stash clear is the "Empty the Trash" button.
        // It permanently deletes every single piece of work you have hidden in your secret storage area.


//*********************Git hub Commands *********************/ 

// 1)create a branch --> git branch branchName (A branch is like a separate copy of your project where you can make changes without affecting the main code.)

    //a) git branch → shows all branches
    //b) git branch new-branch → creates a new branch
    //c) git checkout new-branch → switch to that branch

//2)git branch -M main --> git branch -M main is used to rename your current branch to main

//3)git remote add origin https://github.com/shubhamkumar123456/guthubNotes.git-->This command connects your local project (on your computer) to a GitHub repository (online). 

//4)git push -u origin main-->This command uploads your code from your computer to GitHub.

// 5)git remote remove origin --> This command disconnects your local project from the GitHub repository.

//6) if you want to contribute in someone's project first go on github fork his project , clone that project on your pc and add upstream url 

// 7)git remote add upstream https://github.com/shubhamkumar123456/complete-intro-to-sql.git  (Connect your project to the original repository so you can get new updates from it.)

// 8) git remote -v --> It tells you which GitHub URLs your project is linked to.(it will show all origin url and upstream url)

// 9) remove remote url --> git remote rm origin , or git remote rm upstream

// 10)

          ________________________________________________________________________________________________________________________________________________________________
// These are common Git commands used in various situations:

// start a working area (see also: git help tutorial)
//    clone      Clone a repository into a new directory
//    init       Create an empty Git repository or reinitialize an existing one

// work on the current change (see also: git help everyday)
//    add        Add file contents to the index
//    mv         Move or rename a file, a directory, or a symlink
//    restore    Restore working tree files
//    rm         Remove files from the working tree and from the index

// examine the history and state (see also: git help revisions)
//    bisect     Use binary search to find the commit that introduced a bug
//    diff       Show changes between commits, commit and working tree, etc
//    grep       Print lines matching a pattern
//    log        Show commit logs
//    show       Show various types of objects
//    status     Show the working tree status

// grow, mark and tweak your common history
//    backfill   Download missing objects in a partial clone
//    branch     List, create, or delete branches
//    commit     Record changes to the repository
//    merge      Join two or more development histories together
//    rebase     Reapply commits on top of another base tip
//    reset      Reset current HEAD to the specified state
//    switch     Switch branches
//    tag        Create, list, delete or verify a tag object signed with GPG

// collaborate (see also: git help workflows)
//    fetch      Download objects and refs from another repository
//    pull       Fetch from and integrate with another repository or a local branch
//    push       Update remote refs along with associated objects
wdawd