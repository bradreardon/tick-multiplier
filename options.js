// Saves options to chrome.storage
function save_options() {
  var wage = document.getElementById('wage').value;
  chrome.storage.local.set({
    wage: wage
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    wage: 10.00
  }, function(items) {
    document.getElementById('wage').value = items.wage;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);