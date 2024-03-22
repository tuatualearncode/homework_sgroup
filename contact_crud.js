let contacts = [];
let editIndex = -1;

function renderContacts() {    
  const contactsContainer = document.getElementById("contacts");
  contactsContainer.innerHTML = "";

  contacts.forEach((contact, index) => {
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");
    contactCard.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Kare_phone : ${contact.phoneKare}</p>
      <div class="actions">
        <button onclick="editContact(${index})">Edit</button>
        <button onclick="deleteContact(${index})">Delete</button>
      </div>
    `;
    contactsContainer.appendChild(contactCard);
  });
}

function addContact() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const phoneKare = document.getElementById("phoneKare").value.trim();

  if (name && email && phone && phoneKare) {
    const contact = { name, email, phone, phoneKare };
    if (editIndex === -1) {
      contacts.push(contact);
    } else {
      contacts[editIndex] = contact;
      editIndex = -1;
    }
    renderContacts();
    closeModal();
  } else {
    alert("Please fill in all fields.");
  }
}

function editContact(index) {
  const contact = contacts[index];
  document.getElementById("name").value = contact.name;
  document.getElementById("email").value = contact.email;
  document.getElementById("phone").value = contact.phone;
  document.getElementById("phoneKare").value = contact.phoneKare;

  editIndex = index;
  openModal();
}

function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

function openModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

document.getElementById("addContact").addEventListener("click", openModal);
document.getElementById("saveContact").addEventListener("click", addContact);
document.querySelector(".close").addEventListener("click", closeModal);

// Render initial contacts
renderContacts();