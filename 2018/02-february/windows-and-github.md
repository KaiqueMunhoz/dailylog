# SSH - Windows and Github

- [Basics Settings](#basics-settings)
- [Managing the key ssh in your windows SO to access github](#managing-the-key-ssh-in-your-windows-so-to-access-github)

### Basics Settings

* Define the name to user

_git config --global user.name KaiqueMunhoz_

* Define the email to user

_git config --global user.email munhoz13km@gmail.com_

### Managing the key ssh in your windows SO to access github

* Generate a ssh-keygen

_ssh-keygen -t rsa -b 4096 -C "munhoz13km@gmail.com"_

* Define a password
* Test is running

_eval "$(ssh-agent -s)"_

* Add the key

_ssh-add ~/.ssh/id_rsa_

* Copy public key

_clip < ~/.ssh/id_rsa.pub_

* Add the content into github
* Test if the connection is stablished

_ssh -T git@github.com_

* Confirm the message

_Yes_
