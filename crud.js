var app = new function() {
  this.el = document.getElementById('complaints');
  this.complaints = [];
  this.naming = [];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'complaint';
    if (data) {
      if (data > 1) {
        name = 'complaints';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.complaints.length > 0) {
      for (i = 0; i < this.complaints.length; i++) {
        data += '<tr>';
        data += '<td>' + this.naming[i] + '</td>';
        data += '<td>' + this.complaints[i] + '</td>';
        data += '<td><button id="edit" onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.complaints.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('addname');
    // Get the value
    var complaints = el.value;
    if (complaints) {
      // Add the new value
      this.complaints.push(complaints.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var count=1;
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.complaints[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var complaint = el.value;
      if (count==1) {
        // Edit value
        self.complaints.splice(item, 1, complaint.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
      document.getElementById('edit').style.display = 'block';
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.complaints.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
