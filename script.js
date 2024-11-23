// // Form submit event ko handle karte hain
// document.getElementById("resumeForm")?.addEventListener
// ("submit", function(event) {
//     event.preventDefault();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
//     // Form ke elements ko access kar rahe hain
//     const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
//     const nameElement = document.getElementById("name") as HTMLInputElement;
//     const emailElement = document.getElementById("email") as HTMLInputElement;
//     const phoneElement = document.getElementById("phone") as HTMLInputElement;
//     const educationElement = document.getElementById("education") as HTMLInputElement;
//     const experienceElement = document.getElementById("experience") as HTMLInputElement;
//     const skillsElement = document.getElementById("skills") as HTMLInputElement;
//     const usernameElement = document.getElementById("username") as HTMLInputElement;
//     const resumeOutputElement = document.getElementById("resumeOutput")  // HTMLElement ka cast yahan
//     // Check kar rahe hain ke tamam elements available hain
//     if (profilePictureInput && nameElement && emailElement &&
//          phoneElement && educationElement && experienceElement
//           && skillsElement && usernameElement && resumeOutputElement) {
//         // Saari values ko access kar rahe hain
//         const name = nameElement.value;        const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         const profilePictureFile = profilePictureInput.files?.[0];
//         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
//         // Resume HTML ka content bana rahe hain
//         const resumeOutput = `
//             <h2>Resume</h2>
//             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
//             <p><strong>Name:</strong> <span class="editable">${name}</span></p>
//             <p><strong>Email:</strong> <span class="editable">${email}</span></p>
//             <p><strong>Phone Number:</strong> <span class="editable">${phone}</span></p>
//             <h3>Education</h3>
//             <p class="editable">${education}</p>
//             <h3>Experience</h3>
//             <p class="editable">${experience}</p>
//             <h3>Skills</h3>
//             <p class="editable">${skills}</p>
//         `;
//         // Resume ko output element mein display kar rahe hain
//         resumeOutputElement.innerHTML = resumeOutput;
//         // Buttons add karte hain
//         addButtons(usernameElement.value, resumeOutputElement);
//         // Output container ko visible karte hain
//         resumeOutputElement.style.display = "block";
//   }
// // PDF, Share Link aur HTML download ke buttons ke liye function
// function addButtons(username: string, resumeOutputElement: HTMLElement) {
//     let buttonsContainer = document.getElementById("buttonsContainer");
//     if (buttonsContainer) {
//         buttonsContainer.remove();
//     }
//     buttonsContainer = document.createElement("div");
//     buttonsContainer.id = "buttonsContainer";
//     resumeOutputElement.appendChild(buttonsContainer);
//     // PDF download button
//     const downloadButton = document.createElement("button");
//     downloadButton.textContent = "Download as PDF";
//     downloadButton.addEventListener("click", () => window.print());
//     buttonsContainer.appendChild(downloadButton);
//     // Copy Shareable Link button
//     const shareLinkButton = document.createElement("button");
//     shareLinkButton.textContent = "Copy Shareable Link";
//     shareLinkButton.addEventListener("click", async () => {
//         const shareableLink = `https://yourdomain.com/resume/${username.replace(/\s+/g, "__")}_cv.html`;
//         try {
//             await navigator.clipboard.writeText(shareableLink);
//             alert("Shareable link copied to clipboard");
//         } catch (err) {
//             console.error("Failed to copy link: ", err);
//             alert("Failed to copy link. Please try again.");
//         }
//     });
//     buttonsContainer.appendChild(shareLinkButton);
//     // HTML resume download link
//     const downloadLink = document.createElement("a");
//     downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutputElement.innerHTML);
//     downloadLink.download = `${username.replace(/\s+/g, "_")}_resume_2024.html`;
//     downloadLink.textContent = 'Download your 2024 Resume as HTML';
//     buttonsContainer.appendChild(downloadLink);
// }
// )
// Form submit event ko handle karte hain
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Form ke elements ko access kar rahe hain
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    var resumeOutputElement = document.getElementById("resumeOutput"); // HTMLElement ka cast zaroori nahi hai
    // Check kar rahe hain ke tamam elements available hain
    if (profilePictureInput && nameElement && emailElement &&
        phoneElement && educationElement && experienceElement &&
        skillsElement && usernameElement && resumeOutputElement) {
        // Saari values ko access kar rahe hain
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Resume HTML ka content bana rahe hain
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n            <p><strong>Name:</strong> <span class=\"editable\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong> <span class=\"editable\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p class=\"editable\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p class=\"editable\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p class=\"editable\">").concat(skills, "</p>\n        ");
        // Resume ko output element mein display kar rahe hain
        resumeOutputElement.innerHTML = resumeOutput;
        // Buttons add karte hain
        addButtons(usernameElement.value, resumeOutputElement);
        // Output container ko visible karte hain
        resumeOutputElement.style.display = "block";
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
// PDF, Share Link aur HTML download ke buttons ke liye function
function addButtons(username, resumeOutputElement) {
    var _this = this;
    var buttonsContainer = document.getElementById("buttonsContainer");
    if (buttonsContainer) {
        buttonsContainer.remove();
    }
    buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonsContainer";
    resumeOutputElement.appendChild(buttonsContainer);
    // PDF download button
    var downloadButton = document.createElement("button");
    downloadButton.textContent = "Download as PDF";
    downloadButton.addEventListener("click", function () { return window.print(); });
    buttonsContainer.appendChild(downloadButton);
    // Copy Shareable Link button
    var shareLinkButton = document.createElement("button");
    shareLinkButton.textContent = "Copy Shareable Link";
    shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var shareableLink, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shareableLink = "https://yourdomain.com/resume/".concat(username.replace(/\s+/g, "__"), "_cv.html");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                case 2:
                    _a.sent();
                    alert("Shareable link copied to clipboard");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error("Failed to copy link: ", err_1);
                    alert("Failed to copy link. Please try again.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    buttonsContainer.appendChild(shareLinkButton);
    // HTML resume download link
    var downloadLink = document.createElement("a");
    downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutputElement.innerHTML);
    downloadLink.download = "".concat(username.replace(/\s+/g, "_"), "_resume_2024.html");
    downloadLink.textContent = 'Download your 2024 Resume as HTML';
    buttonsContainer.appendChild(downloadLink);
}
