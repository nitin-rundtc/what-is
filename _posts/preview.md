---
title: "Understanding the `git reset --soft HEAD~1` Command in Git"
excerpt: "If you are a developer using Git for version control, you’ve probably encountered situations where you need to undo a commit, but without losing the changes made in that commit. One of the most useful Git commands for this purpose is `git reset --soft HEAD~1`. This command allows you to undo the last commit while keeping all your changes staged (in the index), so you can make adjustments or commit again. In this article, we will break down how and when to use `git reset --soft HEAD~1`, and explain its functionality in simple terms.
"
coverImage: "/what-is/assets/blog/understanding-the-git-reset---soft-head1-command-in-git/soft-head1-command-in-git.jpeg"
date: "2025-02-22T16Z"
author:
  name: "nitin"
  picture: "/what-is/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/what-is/assets/blog/understanding-the-git-reset---soft-head1-command-in-git/soft-head1-command-in-git.jpeg"
---
If you are a developer using Git for version control, you’ve probably encountered situations where you need to undo a commit, but without losing the changes made in that commit. One of the most useful Git commands for this purpose is `git reset --soft HEAD~1`. This command allows you to undo the last commit while keeping all your changes staged (in the index), so you can make adjustments or commit again. In this article, we will break down how and when to use `git reset --soft HEAD~1`, and explain its functionality in simple terms.

### What is `git reset --soft HEAD~1`?

The `git reset --soft HEAD~1` command is used to undo the most recent commit while leaving the changes from that commit staged and ready for re-commit. The key term here is “soft,” which ensures that your changes remain staged in the index. 

#### Components of the Command:
- **`git reset`**: This is the main command used to reset your Git repository to a previous state.
- **`--soft`**: This option indicates that the changes in your working directory and the index (the staging area) will be preserved. It does not affect your files, only the commit history.
- **`HEAD~1`**: `HEAD` refers to the current commit, and `~1` indicates the parent commit. In simpler terms, `HEAD~1` represents the commit just before your most recent commit.

### How Does `git reset --soft HEAD~1` Work?

When you run `git reset --soft HEAD~1`, the following happens:
1. The latest commit is undone.
2. The changes made in that commit are preserved and left in the staging area (index).
3. The commit message and modifications are still available, so you can either edit them or simply re-commit after making any necessary changes.

This command is useful when you realize that your last commit needs modifications, but you don't want to lose your work. You can fix your mistake, adjust the content, and commit again.

### Steps to Use `git reset --soft HEAD~1`

Here is a simple step-by-step guide to undoing your last commit using `git reset --soft HEAD~1`:

#### 1. Open the Terminal or Command Prompt
Launch your terminal or command prompt window where you can run Git commands.

#### 2. Navigate to Your Git Repository
If you are not already inside your Git project directory, use the `cd` command to navigate there. For example:
```sh
cd path/to/your/repo
```

#### 3. Run the Command
Now, run the following command to undo your most recent commit:
```sh
git reset --soft HEAD~1
```
This command will undo the last commit but keep your changes staged.

### What Happens After Running the Command?

After running `git reset --soft HEAD~1`, the following occurs:
- The last commit is **removed** from the history.
- The changes in that commit are **kept staged**, which means they are still in the index, ready to be re-committed.
- You are free to make changes to the code, modify the commit message, and commit again.

This gives you a chance to fix errors or update the commit content before pushing it to a remote repository.

### Common Use Cases for `git reset --soft HEAD~1`

There are a few common scenarios where using `git reset --soft HEAD~1` can be very helpful. Let’s take a look at these situations:

#### 1. Undoing an Accidental Commit
Imagine you made a commit that was accidental, or perhaps you realized there was a mistake in the code right after committing. Instead of creating a new commit that “undoes” the mistake, you can use `git reset --soft HEAD~1` to remove the commit, keep the changes staged, and fix the issue.

#### 2. Combining Multiple Commits
If you have multiple small commits and you want to combine them into a single commit before pushing, you can use this command to reset back to a previous commit, then re-commit all the staged changes together as a single commit.

### Example Workflow with `git reset --soft HEAD~1`

Let’s walk through a simple example to see how this command can be used effectively.

#### 1. Make a Commit
Let’s say you make a commit after adding a new feature:
```sh
git commit -m "Added new feature"
```

#### 2. Realize There’s a Mistake
After making the commit, you realize there’s an error in the code or something you missed. To fix it, you’ll need to undo the commit but keep your changes staged.

#### 3. Run `git reset --soft HEAD~1`
To undo the most recent commit while keeping your changes, run:
```sh
git reset --soft HEAD~1
```
This command will remove the last commit, but all your changes will stay in the staging area.

#### 4. Fix the Mistake
Now that your changes are staged, you can modify the code and make the necessary adjustments to fix the mistake.

#### 5. Recommit the Changes
Once you’ve fixed the issue, you can re-commit the changes:
```sh
git commit -m "Fixed issue with new feature"
```
This will create a new commit with the updated changes.

### Conclusion

In summary, the `git reset --soft HEAD~1` command is a powerful tool for undoing the last commit while keeping all the changes staged in Git. It’s especially useful when you realize there was a mistake in your last commit and want to make corrections before pushing it to a remote repository. By understanding how and when to use this command, you can ensure your commit history stays clean and organized.

If you ever find yourself in a situation where you need to undo a commit but preserve the changes, remember that `git reset --soft HEAD~1` is your go-to command!