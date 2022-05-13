// Hamburger Menu
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');
const hamburger = document.querySelector('.fa-bars');

// navToggle.addEventListener('click', () => {
//   // console.log(navList.classList);
//   // console.log(navList.classList.contains('nav__list'));
//   if (navList.classList.contains('show-links')) {
//     navList.classList.remove('show-links');
//   } else {
//     navList.classList.add('show-links');
//     hamburger.remove();
//   }
// });

// Blog Comments
// Query DOM for form element
const blogForm = document.querySelector('.comment-form');
console.log(blogForm);

// form submit event listener
blogForm.addEventListener('submit', (e) => {
  // prevent page refresh upon submission
  e.preventDefault();
  // alert('Form has been successfully submitted!');

  // query the DOM for all REQUIRED input elements and check whether they're empty
  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;
  // console.log(nameInput);
  // console.log(emailInput);

  // only if user has filled these required fields
  if (nameInput && emailInput) {
    console.log('Thanks for filling out the required fields!');

    // grab the user's comment information from the form inputs
    // create new div element with a class
    const newComment = document.createElement('div');
    // console.log(newComment);

    // create an element that represents the text we have to add to our page
    const websiteInput = document.getElementById('website').value;
    const commentInput = document.getElementById('comment').value;

    // console.log(nameInput);
    // console.log(emailInput);
    // console.log(websiteInput);
    // console.log(commentInput);

    // current date and time
    let today = new Date();
    document.createTextNode(today);
    // console.log(today);

    // Best not to use innerHTML in this case for security reasons - find better way
    newComment.innerHTML = `<div class="second-comment">
              <img src="./assets/blog-6.jpeg" alt="Photo of user" />
              <div class="comment-text-container">
                <h5>${nameInput}</h5>
                <p>
                  ${commentInput}
                </p>
                <p>${today}</p>
              </div>
              <!-- end of .second-comment -->
            </div>`;

    const nameContent = document.createTextNode(nameInput);
    console.log(nameContent);

    const emailContent = document.createTextNode(emailInput);
    console.log(emailContent);

    const websiteContent = document.createTextNode(websiteInput);
    console.log(websiteContent);

    const commentContent = document.createTextNode(commentInput);
    console.log(commentContent);

    document.querySelector('.comments-container').appendChild(newComment);
  } else {
    alert('Please fill out both the name and email fields.');
  }
  // Change comment count
  let commentCount = document.getElementById('comment-count').textContent;
  console.log(document.getElementById('comment-count'));

  const getCommentCount = () => {
    return commentCount++;
  };
  getCommentCount();

  console.log(getCommentCount());
});
