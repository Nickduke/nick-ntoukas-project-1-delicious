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

  // only if user has filled these required fields
  if (nameInput && emailInput) {
    // create new div element
    const newComment = document.createElement('div');

    // grab the user's comment information from the form inputs
    const websiteInput = document.getElementById('website').value;
    const commentInput = document.getElementById('comment').value;

    // current date and time
    let today = new Date();

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

    const commentsContainer = document.querySelector('.comments-container');

    commentsContainer.appendChild(newComment);

    // Change comment count -notworking
    let commentCount = document.getElementById('comment-count').textContent;
    commentCount = commentsContainer.childElementCount;

    const addCommentCount = () => {
      commentCount.innerHTML = commentCount;
    };

    addCommentCount();
    console.log(commentCount);

    console.log(commentsContainer);

    alert('Thanks for submitting a comment!');
  } else {
    alert('Please fill out both the name and email fields.');
  }
});
