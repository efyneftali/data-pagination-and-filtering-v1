/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
document.addEventListener('DOMContentLoaded',()=>{

   /*
   For assistance:
      Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
      Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
   */

   /*Create the `showPage` function. This function will create and insert/append the elements needed to display a "page" of nine students
   */
   function showPage(list, page) {
      // create two variables which will represent the index for the first and last student on the page
      const startIndex = (page*8) - 8
      const endIndex = page*8

      // select the element with a class of `student-list` and assign it to a variable
      const studentList = document.querySelector('.student-list')
      // set the innerHTML property of the variable you just created to an empty string
      studentList.innerHTML = ''
      
     
      // loop over the length of the `list` parameter
      for(let i=0; i<list.length; i++){
      // inside the loop create a conditional to display the proper students
         if(i >= startIndex && i <= endIndex){
         
            // inside the conditional:
            // create the elements needed to display the student information using templete literals
            // insert the above elements
            const html = `
               <li class="student-item cf">
                  <div class="student-details">
                  <img class="avatar" src=${list[i].picture.thumbnail} alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
                  </div>
               </li>
            `
            //add list items to the DOM 
            studentList.insertAdjacentHTML('beforeend', html)
           
         }
      }
   }
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

   function addPagination(list){
      //calculate page #
      const pageNum = Math.ceil(list.length/ 9)
      let linkList_ul = document.querySelector('.link-list')
      linkList_ul.innerHTML = ''
      
      //based on page # add that many number of buttons and add them to the DOM
      for(let i=0; i<pageNum; i++){
         const buttonHTML = `
            <li>
               <button type="button">${i+1}</button>
            </li>
         `
         linkList_ul.insertAdjacentHTML('beforeend', buttonHTML)
      }

      //grab the first li element, access the first child of li aka the btn & give it the class name "active"
      const firstBtn = linkList_ul.firstElementChild.firstElementChild
      firstBtn.className = 'active'
      
      //target the page btns, grab the btn with the 'active' class, remove its class and pass it to the btn most recently clicked
      linkList_ul.addEventListener('click',(e)=>{
         if(e.target.tagName === "BUTTON"){
            document.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
            //show the students based on the page clicked 
            showPage(list,e.target.textContent)
         }
      })

   }
// Call functions
showPage(data,1)
addPagination(data)
})
