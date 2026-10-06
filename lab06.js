/* =====================================================
   LAB 06
   Full Stack Web Development
===================================================== */


/* =====================================================
   TASK 1
   INTERACTIVE COURSE PLANNER
===================================================== */


/* Select HTML elements */

const courseInput =
    document.querySelector("#courseInput");

const addCourseBtn =
    document.querySelector("#addCourseBtn");

const courseList =
    document.querySelector("#courseList");

const courseMessage =
    document.querySelector("#courseMessage");

const totalCourses =
    document.querySelector("#totalCourses");

const completedCourses =
    document.querySelector("#completedCourses");

const remainingCourses =
    document.querySelector("#remainingCourses");

const clearCoursesBtn =
    document.querySelector("#clearCoursesBtn");

const highlightLongestBtn =
    document.querySelector("#highlightLongestBtn");



/* Update course counter */

function updateCourseCounter() {

    const courses =
        courseList.querySelectorAll("li");

    const completed =
        courseList.querySelectorAll(
            ".course-completed"
        );


    totalCourses.textContent =
        courses.length;

    completedCourses.textContent =
        completed.length;

    remainingCourses.textContent =
        courses.length -
        completed.length;

}



/* Add Course */

addCourseBtn.addEventListener(
    "click",
    function () {

        const courseName =
            courseInput.value.trim();


        /* Empty course */

        if (courseName === "") {

            courseMessage.textContent =
                "Error: Course name cannot be empty.";

            courseMessage.className =
                "alert alert-danger mt-3";

            courseInput.focus();

            return;

        }


        /* Check duplicate */

        const courses =
            courseList.querySelectorAll("li");

        let duplicate = false;


        courses.forEach(function (li) {

            const oldName =
                li.querySelector(
                    ".course-name"
                ).textContent;


            if (
                oldName.toLowerCase() ===
                courseName.toLowerCase()
            ) {

                duplicate = true;

            }

        });


        if (duplicate) {

            courseMessage.textContent =
                "Error: Course already exists.";

            courseMessage.className =
                "alert alert-danger mt-3";

            courseInput.focus();

            return;

        }


        /* Create LI */

        const li =
            document.createElement("li");

        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );


        /* Course name */

        const name =
            document.createElement("span");

        name.classList.add(
            "course-name"
        );

        name.textContent =
            courseName;


        /* Delete button */

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent =
            "Delete";

        deleteButton.type =
            "button";

        deleteButton.classList.add(
            "btn",
            "btn-danger",
            "btn-sm",
            "delete-course"
        );


        /* Put everything together */

        li.appendChild(name);

        li.appendChild(deleteButton);

        courseList.appendChild(li);


        /* Clear input */

        courseInput.value = "";

        courseInput.focus();


        courseMessage.textContent =
            "Course added successfully.";

        courseMessage.className =
            "alert alert-success mt-3";


        updateCourseCounter();

    }
);



/* =====================================================
   EVENT DELEGATION
===================================================== */

courseList.addEventListener(
    "click",
    function (event) {


        /* Delete */

        if (
            event.target.classList.contains(
                "delete-course"
            )
        ) {

            const li =
                event.target.closest("li");

            li.remove();

            updateCourseCounter();

        }


        /* Complete / uncomplete */

        if (
            event.target.classList.contains(
                "course-name"
            )
        ) {

            event.target.classList.toggle(
                "course-completed"
            );

            updateCourseCounter();

        }

    }
);



/* =====================================================
   CLEAR ALL
===================================================== */

clearCoursesBtn.addEventListener(
    "click",
    function () {

        courseList.replaceChildren();

        updateCourseCounter();

        courseMessage.textContent = "";

    }
);



/* =====================================================
   HIGHLIGHT LONGEST COURSE
===================================================== */

highlightLongestBtn.addEventListener(
    "click",
    function () {

        const courses =
            courseList.querySelectorAll("li");


        if (courses.length === 0) {

            courseMessage.textContent =
                "There are no courses.";

            courseMessage.className =
                "alert alert-danger mt-3";

            return;

        }


        /* Remove old highlight */

        courses.forEach(function (course) {

            course.classList.remove(
                "course-highlight"
            );

        });


        let longest =
            courses[0];


        courses.forEach(function (course) {

            const currentName =
                course.querySelector(
                    ".course-name"
                ).textContent;


            const longestName =
                longest.querySelector(
                    ".course-name"
                ).textContent;


            if (
                currentName.length >
                longestName.length
            ) {

                longest = course;

            }

        });


        longest.classList.add(
            "course-highlight"
        );

    }
);



/* Initial counter */

updateCourseCounter();



/* =====================================================
   TASK 2
   LIVE STUDENT ID CARD
===================================================== */


/* Get form elements */

const idName =
    document.querySelector("#idName");

const idRoll =
    document.querySelector("#idRoll");

const idDepartment =
    document.querySelector("#idDepartment");

const idSemester =
    document.querySelector("#idSemester");

const idColor =
    document.querySelector("#idColor");

const showCgpa =
    document.querySelector("#showCgpa");

const resetIdCard =
    document.querySelector("#resetIdCard");


/* Get card elements */

const cardName =
    document.querySelector("#cardName");

const cardRoll =
    document.querySelector("#cardRoll");

const cardDepartment =
    document.querySelector("#cardDepartment");

const cardSemester =
    document.querySelector("#cardSemester");

const studentIdCard =
    document.querySelector("#studentIdCard");

const cgpaContainer =
    document.querySelector("#cgpaContainer");

const nameCounter =
    document.querySelector("#nameCounter");

const downloadSummary =
    document.querySelector("#downloadSummary");



/* Update ID Card */

function updateIdCard() {


    /* Name */

    if (idName.value === "") {

        cardName.textContent =
            "Your Name";

    } else {

        cardName.textContent =
            idName.value;

    }


    /* Roll Number */

    if (idRoll.value === "") {

        cardRoll.textContent =
            "Your Roll Number";

    } else {

        cardRoll.textContent =
            idRoll.value;

    }


    /* Department */

    if (idDepartment.value === "") {

        cardDepartment.textContent =
            "Your Department";

    } else {

        cardDepartment.textContent =
            idDepartment.value;

    }


    /* Semester */

    if (idSemester.value === "") {

        cardSemester.textContent =
            "Your Semester";

    } else {

        cardSemester.textContent =
            idSemester.value;

    }


    /* Character counter */

    const left =
        30 - idName.value.length;

    nameCounter.textContent =
        "Characters left: " + left;



    /* Change color */

    if (idColor.value === "blue") {

        studentIdCard.style.backgroundColor =
            "#cfe2ff";

    }

    if (idColor.value === "green") {

        studentIdCard.style.backgroundColor =
            "#d1e7dd";

    }

    if (idColor.value === "yellow") {

        studentIdCard.style.backgroundColor =
            "#fff3cd";

    }



    /* CGPA */

    cgpaContainer.replaceChildren();


    if (showCgpa.checked) {

        const cgpa =
            document.createElement("p");

        cgpa.textContent =
            "CGPA: 3.80";


        const badge =
            document.createElement("span");

        badge.textContent =
            "Excellent";

        badge.classList.add(
            "cgpa-badge"
        );


        cgpaContainer.appendChild(cgpa);

        cgpaContainer.appendChild(badge);

    }



    /* Summary */

    let cgpaText =
        "CGPA Badge: Hidden";


    if (showCgpa.checked) {

        cgpaText =
            "CGPA: 3.80\nStatus: Excellent";

    }


    downloadSummary.value =
`Student ID Card

Name: ${idName.value || "Your Name"}
Roll No: ${idRoll.value || "Your Roll Number"}
Department: ${idDepartment.value || "Your Department"}
Semester: ${idSemester.value || "Your Semester"}
Card Color: ${idColor.value}
${cgpaText}`;

}



/* Input events */

idName.addEventListener(
    "input",
    updateIdCard
);

idRoll.addEventListener(
    "input",
    updateIdCard
);

idSemester.addEventListener(
    "input",
    updateIdCard
);


/* Change events */

idDepartment.addEventListener(
    "change",
    updateIdCard
);

idColor.addEventListener(
    "change",
    updateIdCard
);

showCgpa.addEventListener(
    "change",
    updateIdCard
);



/* Reset */

resetIdCard.addEventListener(
    "click",
    function () {

        idName.value = "";

        idRoll.value = "";

        idDepartment.value = "";

        idSemester.value = "";

        idColor.value = "blue";

        showCgpa.checked = false;

        updateIdCard();

    }
);


/* Initial card */

updateIdCard();



/* =====================================================
   TASK 3
   COURSE REGISTRATION
===================================================== */


const registrationForm =
    document.querySelector(
        "#registrationForm"
    );

const regName =
    document.querySelector("#regName");

const regEmail =
    document.querySelector("#regEmail");

const regPhone =
    document.querySelector("#regPhone");

const regDob =
    document.querySelector("#regDob");

const regCourse =
    document.querySelector("#regCourse");

const regPassword =
    document.querySelector("#regPassword");

const regConfirmPassword =
    document.querySelector(
        "#regConfirmPassword"
    );

const terms =
    document.querySelector("#terms");

const showPassword =
    document.querySelector(
        "#showPassword"
    );

const phoneMessage =
    document.querySelector(
        "#phoneMessage"
    );

const registrationResult =
    document.querySelector(
        "#registrationResult"
    );



/* =====================================================
   CHECK AGE
===================================================== */

function checkAge(date) {

    const birthDate =
        new Date(date);

    const today =
        new Date();


    let age =
        today.getFullYear() -
        birthDate.getFullYear();


    const month =
        today.getMonth() -
        birthDate.getMonth();


    if (
        month < 0 ||
        (
            month === 0 &&
            today.getDate() <
            birthDate.getDate()
        )
    ) {

        age--;

    }


    return age >= 16;

}



/* =====================================================
   CUSTOM VALIDATION
===================================================== */

function validateRegistration() {


    /* Password must contain digit */

    if (
        regPassword.value !== "" &&
        !/[0-9]/.test(
            regPassword.value
        )
    ) {

        regPassword.setCustomValidity(
            "Password must contain a digit."
        );

    } else {

        regPassword.setCustomValidity("");

    }



    /* Confirm password */

    if (
        regConfirmPassword.value !== "" &&
        regPassword.value !==
        regConfirmPassword.value
    ) {

        regConfirmPassword.setCustomValidity(
            "Passwords do not match."
        );

    } else {

        regConfirmPassword.setCustomValidity("");

    }



    /* Age */

    if (
        regDob.value !== "" &&
        !checkAge(regDob.value)
    ) {

        regDob.setCustomValidity(
            "Student must be at least 16 years old."
        );

    } else {

        regDob.setCustomValidity("");

    }

}



/* =====================================================
   PHONE LIVE MESSAGE
===================================================== */

regPhone.addEventListener(
    "input",
    function () {

        if (
            regPhone.validity.valueMissing
        ) {

            phoneMessage.textContent =
                "Phone is required.";

            phoneMessage.className =
                "text-danger";

        }

        else if (
            regPhone.validity.patternMismatch
        ) {

            phoneMessage.textContent =
                "Phone must look like 03001234567.";

            phoneMessage.className =
                "text-danger";

        }

        else if (
            regPhone.validity.valid
        ) {

            phoneMessage.textContent =
                "Phone number is valid.";

            phoneMessage.className =
                "text-success";

        }

    }
);



/* Validate while typing */

regPassword.addEventListener(
    "input",
    validateRegistration
);

regConfirmPassword.addEventListener(
    "input",
    validateRegistration
);

regDob.addEventListener(
    "change",
    validateRegistration
);



/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

showPassword.addEventListener(
    "change",
    function () {

        if (showPassword.checked) {

            regPassword.type = "text";

            regConfirmPassword.type =
                "text";

        } else {

            regPassword.type =
                "password";

            regConfirmPassword.type =
                "password";

        }

    }
);



/* =====================================================
   REGISTRATION SUBMIT
===================================================== */

registrationForm.addEventListener(
    "submit",
    function (event) {


        /* Stop page reload */

        event.preventDefault();


        /* Run custom validation */

        validateRegistration();


        /* Bootstrap validation */

        registrationForm.classList.add(
            "was-validated"
        );


        /* Check form */

        if (
            !registrationForm.checkValidity()
        ) {

            return;

        }


        /* FormData */

        const data =
            new FormData(
                registrationForm
            );


        const name =
            data.get("fullName");

        const email =
            data.get("email");

        const phone =
            data.get("phone");

        const course =
            data.get("course");


        /* Create result */

        const result =
            document.createElement("div");

        result.classList.add(
            "alert",
            "alert-success"
        );


        const heading =
            document.createElement("h4");

        heading.textContent =
            "Registration Successful";


        const nameText =
            document.createElement("p");

        nameText.textContent =
            "Name: " + name;


        const emailText =
            document.createElement("p");

        emailText.textContent =
            "Email: " + email;


        const phoneText =
            document.createElement("p");

        phoneText.textContent =
            "Phone: " + phone;


        const courseText =
            document.createElement("p");

        courseText.textContent =
            "Course: " + course;


        result.appendChild(heading);

        result.appendChild(nameText);

        result.appendChild(emailText);

        result.appendChild(phoneText);

        result.appendChild(courseText);


        registrationResult.replaceChildren(
            result
        );


        /* Reset form */

        registrationForm.reset();

        registrationForm.classList.remove(
            "was-validated"
        );

        regPassword.setCustomValidity("");

        regConfirmPassword.setCustomValidity("");

        regDob.setCustomValidity("");

        phoneMessage.textContent = "";

    }
);



/* =====================================================
   TASK 4
   STUDENT MANAGEMENT DASHBOARD
===================================================== */


/* =====================================================
   STUDENT ARRAY
===================================================== */

let students = [

    {
        name: "Sara Ahmed",
        rollNumber: "BSCS-023",
        department: "Software Engineering",
        semester: 5,
        cgpa: 3.80,
        email: "sara@example.com"
    },

    {
        name: "Ali Khan",
        rollNumber: "BSCS-001",
        department: "Computer Science",
        semester: 4,
        cgpa: 3.40,
        email: "ali@example.com"
    },

    {
        name: "Ayesha Malik",
        rollNumber: "BSCS-002",
        department: "Information Technology",
        semester: 6,
        cgpa: 3.00,
        email: "ayesha@example.com"
    },

    {
        name: "Hamza Shah",
        rollNumber: "BSCS-003",
        department: "Computer Science",
        semester: 3,
        cgpa: 2.80,
        email: "hamza@example.com"
    },

    {
        name: "Fatima Noor",
        rollNumber: "BSCS-004",
        department: "Software Engineering",
        semester: 5,
        cgpa: 3.32,
        email: "fatima@example.com"
    },

    {
        name: "Usman Ali",
        rollNumber: "BSCS-005",
        department: "Information Technology",
        semester: 2,
        cgpa: 1.80,
        email: "usman@example.com"
    }

];


let highestFirst = true;



/* =====================================================
   SELECT ELEMENTS
===================================================== */

const studentForm =
    document.querySelector(
        "#studentForm"
    );

const studentCards =
    document.querySelector(
        "#studentCards"
    );

const studentSearch =
    document.querySelector(
        "#studentSearch"
    );

const departmentFilter =
    document.querySelector(
        "#departmentFilter"
    );

const sortCgpaBtn =
    document.querySelector(
        "#sortCgpaBtn"
    );

const dashboardMessage =
    document.querySelector(
        "#dashboardMessage"
    );



/* =====================================================
   GET FORM DATA
===================================================== */

function getStudentData() {

    return {

        name:
            document.querySelector(
                "#studentName"
            ).value.trim(),

        rollNumber:
            document.querySelector(
                "#studentRoll"
            ).value.trim().toUpperCase(),

        department:
            document.querySelector(
                "#studentDepartment"
            ).value,

        semester:
            Number(
                document.querySelector(
                    "#studentSemester"
                ).value
            ),

        cgpa:
            Number(
                document.querySelector(
                    "#studentCgpa"
                ).value
            ),

        email:
            document.querySelector(
                "#studentEmail"
            ).value.trim()

    };

}



/* =====================================================
   VALIDATE STUDENT FORM
===================================================== */

function validateStudentForm() {


    const name =
        document.querySelector(
            "#studentName"
        );

    const roll =
        document.querySelector(
            "#studentRoll"
        );

    const department =
        document.querySelector(
            "#studentDepartment"
        );

    const semester =
        document.querySelector(
            "#studentSemester"
        );

    const cgpa =
        document.querySelector(
            "#studentCgpa"
        );

    const email =
        document.querySelector(
            "#studentEmail"
        );


    let valid = true;



    /* NAME */

    if (!name.checkValidity()) {

        name.classList.add(
            "invalid-field"
        );

        name.classList.remove(
            "valid-field"
        );

        document.querySelector(
            "#studentNameError"
        ).textContent =
            "Name must contain at least 3 characters.";

        valid = false;

    } else {

        name.classList.add(
            "valid-field"
        );

        name.classList.remove(
            "invalid-field"
        );

        document.querySelector(
            "#studentNameError"
        ).textContent = "";

    }



    /* ROLL NUMBER */

    const rollPattern =
        /^BSCS-[0-9]{3}$/;


    if (
        !rollPattern.test(
            roll.value.toUpperCase()
        )
    ) {

        roll.classList.add(
            "invalid-field"
        );

        roll.classList.remove(
            "valid-field"
        );

        document.querySelector(
            "#studentRollError"
        ).textContent =
            "Use format BSCS-001.";

        valid = false;

    }

    else {

        /* Check duplicate */

        let exists = students.some(
            function (student) {

                return student.rollNumber
                    .toLowerCase() ===
                    roll.value
                        .trim()
                        .toLowerCase();

            }
        );


        if (exists) {

            roll.classList.add(
                "invalid-field"
            );

            roll.classList.remove(
                "valid-field"
            );

            document.querySelector(
                "#studentRollError"
            ).textContent =
                "Roll number already exists.";

            valid = false;

        }

        else {

            roll.classList.add(
                "valid-field"
            );

            roll.classList.remove(
                "invalid-field"
            );

            document.querySelector(
                "#studentRollError"
            ).textContent = "";

        }

    }



    /* DEPARTMENT */

    if (!department.checkValidity()) {

        department.classList.add(
            "invalid-field"
        );

        department.classList.remove(
            "valid-field"
        );

        document.querySelector(
            "#studentDepartmentError"
        ).textContent =
            "Select a department.";

        valid = false;

    }

    else {

        department.classList.add(
            "valid-field"
        );

        department.classList.remove(
            "invalid-field"
        );

        document.querySelector(
            "#studentDepartmentError"
        ).textContent = "";

    }



    /* SEMESTER */

    if (!semester.checkValidity()) {

        semester.classList.add(
            "invalid-field"
        );

        semester.classList.remove(
            "valid-field"
        );

        document.querySelector(
            "#studentSemesterError"
        ).textContent =
            "Semester must be between 1 and 8.";

        valid = false;

    }

    else {

        semester.classList.add(
            "valid-field"
        );

        semester.classList.remove(
            "invalid-field"
        );

        document.querySelector(
            "#studentSemesterError"
        ).textContent = "";

    }



    /* CGPA */

    if (!cgpa.checkValidity()) {

        cgpa.classList.add(
            "invalid-field"
        );

        cgpa.classList.remove(
            "valid-field"
        );

        document.querySelector(
            "#studentCgpaError"
        ).textContent =
            "CGPA must be between 0 and 4.";

        valid = false;

    }

    else {

        cgpa.classList.add(
            "valid-field"
        );

        cgpa.classList.remove(
            "invalid-field"
        );

        document.querySelector(
            "#studentCgpaError"
        ).textContent = "";

    }



    /* EMAIL */

    if (!email.checkValidity()) {

        email.classList.add(
            "invalid-field"
        );

        email.classList.remove(
            "valid-field"
        );

        document.querySelector(
            "#studentEmailError"
        ).textContent =
            "Enter a valid email.";

        valid = false;

    }

    else {

        email.classList.add(
            "valid-field"
        );

        email.classList.remove(
            "invalid-field"
        );

        document.querySelector(
            "#studentEmailError"
        ).textContent = "";

    }


    return valid;

}



/* =====================================================
   BLUR EVENT
===================================================== */

const studentInputs =
    document.querySelectorAll(
        "#studentForm input, #studentForm select"
    );


studentInputs.forEach(
    function (input) {

        input.addEventListener(
            "blur",
            validateStudentForm
        );

    }
);



/* =====================================================
   ADD STUDENT
===================================================== */

studentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (!validateStudentForm()) {

            return;

        }


        const student =
            getStudentData();


        students.push(student);


        studentForm.reset();


        /* Remove validation colors */

        studentInputs.forEach(
            function (input) {

                input.classList.remove(
                    "valid-field",
                    "invalid-field"
                );

            }
        );


        document
            .querySelectorAll(
                ".field-error"
            )
            .forEach(
                function (error) {

                    error.textContent = "";

                }
            );


        dashboardMessage.textContent =
            "Student added successfully.";

        dashboardMessage.className =
            "alert alert-success";


        displayStudents();

    }
);



/* =====================================================
   GET STATUS
===================================================== */

function getStatus(cgpa) {

    return cgpa >= 3.00
        ? "Excellent"
        : cgpa >= 2.50
            ? "Good"
            : cgpa >= 2.00
                ? "Satisfactory"
                : "Academic Warning";

}



/* =====================================================
   CREATE STUDENT CARD
===================================================== */

function createStudentCard(
    student,
    index
) {


    /* Destructuring */

    const {
        name,
        rollNumber,
        department,
        semester,
        cgpa,
        email
    } = student;


    const status =
        getStatus(cgpa);


    /* Column */

    const column =
        document.createElement("div");

    column.classList.add(
        "col-md-6",
        "col-lg-4"
    );


    /* Card */

    const card =
        document.createElement("div");

    card.classList.add(
        "card",
        "shadow",
        "h-100"
    );


    /* Card body */

    const body =
        document.createElement("div");

    body.classList.add(
        "card-body"
    );


    /* Name */

    const title =
        document.createElement("h4");

    title.textContent =
        name;


    /* Details */

    const rollText =
        document.createElement("p");

    rollText.textContent =
        "Roll No: " + rollNumber;


    const departmentText =
        document.createElement("p");

    departmentText.textContent =
        "Department: " + department;


    const semesterText =
        document.createElement("p");

    semesterText.textContent =
        "Semester: " + semester;


    const cgpaText =
        document.createElement("p");

    cgpaText.textContent =
        "CGPA: " + cgpa.toFixed(2);


    const emailText =
        document.createElement("p");

    emailText.textContent =
        "Email: " + email;


    /* Status */

    const statusText =
        document.createElement("p");

    statusText.textContent =
        "Status: " + status;


    if (status === "Excellent") {

        statusText.classList.add(
            "status-excellent"
        );

    }

    else if (status === "Good") {

        statusText.classList.add(
            "status-good"
        );

    }

    else if (status === "Satisfactory") {

        statusText.classList.add(
            "status-satisfactory"
        );

    }

    else {

        statusText.classList.add(
            "status-warning"
        );

    }



    /* Edit button */

    const editButton =
        document.createElement("button");

    editButton.textContent =
        "Edit CGPA";

    editButton.type =
        "button";

    editButton.classList.add(
        "btn",
        "btn-primary",
        "btn-sm",
        "edit-student"
    );

    editButton.dataset.index =
        index;



    /* Delete button */

    const deleteButton =
        document.createElement("button");

    deleteButton.textContent =
        "Delete";

    deleteButton.type =
        "button";

    deleteButton.classList.add(
        "btn",
        "btn-danger",
        "btn-sm",
        "delete-student"
    );

    deleteButton.dataset.index =
        index;



    /* Buttons */

    const buttons =
        document.createElement("div");

    buttons.classList.add(
        "card-buttons"
    );


    buttons.appendChild(
        editButton
    );

    buttons.appendChild(
        deleteButton
    );



    /* Add everything */

    body.appendChild(title);

    body.appendChild(rollText);

    body.appendChild(departmentText);

    body.appendChild(semesterText);

    body.appendChild(cgpaText);

    body.appendChild(emailText);

    body.appendChild(statusText);

    body.appendChild(buttons);


    card.appendChild(body);

    column.appendChild(card);


    return column;

}



/* =====================================================
   SEARCH + FILTER + SORT
===================================================== */

function getStudentsToShow() {


    const search =
        studentSearch.value
            .toLowerCase()
            .trim();


    const department =
        departmentFilter.value;


    /* filter() */

    let result =
        students.filter(
            function (student) {

                const nameMatch =
                    student.name
                        .toLowerCase()
                        .includes(search);


                const rollMatch =
                    student.rollNumber
                        .toLowerCase()
                        .includes(search);


                const departmentMatch =
                    department === "" ||
                    student.department ===
                    department;


                return (
                    (nameMatch || rollMatch) &&
                    departmentMatch
                );

            }
        );


    /* sort() */

    result.sort(
        function (a, b) {

            if (highestFirst) {

                return b.cgpa - a.cgpa;

            } else {

                return a.cgpa - b.cgpa;

            }

        }
    );


    return result;

}



/* =====================================================
   DISPLAY STUDENTS
===================================================== */

function displayStudents() {


    /* Remove old cards */

    studentCards.replaceChildren();


    const studentsToShow =
        getStudentsToShow();


    studentsToShow.forEach(
        function (student) {


            /* findIndex() */

            const index =
                students.findIndex(
                    function (item) {

                        return (
                            item.rollNumber ===
                            student.rollNumber
                        );

                    }
                );


            const card =
                createStudentCard(
                    student,
                    index
                );


            /* appendChild() */

            studentCards.appendChild(
                card
            );

        }
    );


    updateStatistics();

}



/* =====================================================
   SEARCH
===================================================== */

studentSearch.addEventListener(
    "input",
    displayStudents
);



/* =====================================================
   DEPARTMENT FILTER
===================================================== */

departmentFilter.addEventListener(
    "change",
    displayStudents
);



/* =====================================================
   SORT
===================================================== */

sortCgpaBtn.addEventListener(
    "click",
    function () {

        highestFirst =
            !highestFirst;


        if (highestFirst) {

            sortCgpaBtn.textContent =
                "Sort: Highest First";

        } else {

            sortCgpaBtn.textContent =
                "Sort: Lowest First";

        }


        displayStudents();

    }
);



/* =====================================================
   EVENT DELEGATION
   DELETE + EDIT
===================================================== */

studentCards.addEventListener(
    "click",
    function (event) {


        /* DELETE */

        if (
            event.target.classList.contains(
                "delete-student"
            )
        ) {


            const index =
                Number(
                    event.target.dataset.index
                );


            /* splice() */

            students.splice(
                index,
                1
            );


            displayStudents();


            dashboardMessage.textContent =
                "Student deleted successfully.";

            dashboardMessage.className =
                "alert alert-success";

        }



        /* EDIT */

        if (
            event.target.classList.contains(
                "edit-student"
            )
        ) {


            const index =
                Number(
                    event.target.dataset.index
                );


            const student =
                students[index];


            document.querySelector(
                "#editStudentIndex"
            ).value =
                index;


            document.querySelector(
                "#editCgpaInput"
            ).value =
                student.cgpa;


            document.querySelector(
                "#editCgpaError"
            ).textContent = "";


            const modal =
                bootstrap.Modal.getOrCreateInstance(
                    document.querySelector(
                        "#editCgpaModal"
                    )
                );


            modal.show();

        }

    }
);



/* =====================================================
   EDIT CGPA
===================================================== */

const editCgpaForm =
    document.querySelector(
        "#editCgpaForm"
    );


editCgpaForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const input =
            document.querySelector(
                "#editCgpaInput"
            );


        const newCgpa =
            Number(input.value);


        const error =
            document.querySelector(
                "#editCgpaError"
            );


        /* Validate */

        if (
            input.value === "" ||
            newCgpa < 0 ||
            newCgpa > 4
        ) {

            error.textContent =
                "CGPA must be between 0 and 4.";

            return;

        }


        /* Get student index */

        const index =
            Number(
                document.querySelector(
                    "#editStudentIndex"
                ).value
            );


        /* Update CGPA */

        students[index].cgpa =
            newCgpa;


        /* Close modal */

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                document.querySelector(
                    "#editCgpaModal"
                )
            );


        modal.hide();


        displayStudents();


        dashboardMessage.textContent =
            "CGPA updated successfully.";

        dashboardMessage.className =
            "alert alert-success";

    }
);



/* =====================================================
   STATISTICS
===================================================== */

function updateStatistics() {


    /* Total */

    const total =
        students.length;


    /* reduce() */

    const totalCgpa =
        students.reduce(
            function (sum, student) {

                return sum + student.cgpa;

            },
            0
        );


    let average = 0;


    if (total > 0) {

        average =
            totalCgpa / total;

    }


    /* Highest */

    let highest = null;


    if (students.length > 0) {

        highest =
            students[0];


        students.forEach(
            function (student) {

                if (
                    student.cgpa >
                    highest.cgpa
                ) {

                    highest = student;

                }

            }
        );

    }


    /* Academic Warning */

    const warnings =
        students.filter(
            function (student) {

                return student.cgpa < 2.00;

            }
        ).length;



    /* Display */

    document.querySelector(
        "#statTotal"
    ).textContent =
        total;


    document.querySelector(
        "#statAverage"
    ).textContent =
        average.toFixed(2);


    if (highest !== null) {

        document.querySelector(
            "#statHighest"
        ).textContent =
            highest.cgpa.toFixed(2);


        document.querySelector(
            "#statHighestName"
        ).textContent =
            highest.name;

    } else {

        document.querySelector(
            "#statHighest"
        ).textContent =
            "0.00";


        document.querySelector(
            "#statHighestName"
        ).textContent =
            "-";

    }


    document.querySelector(
        "#statWarning"
    ).textContent =
        warnings;

}



/* =====================================================
   START DASHBOARD
===================================================== */

displayStudents();