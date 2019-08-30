$("select").on("change", function() {
  $(this).css("color", "black");
});

$(document).ready(function() {
  $("#date").datepicker({
    dateFormat: "dd/mm/yy",
    beforeShowDay: $.datepicker.noWeekends,
    dayNames: [
      "Søndag",
      "Mandag",
      "Tirsdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lørdag"
    ],
    dayNamesMin: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
    //defaultDate: +7,
    firstDay: 1,
    minDate: new Date(),
    monthNames: [
      "Januar",
      "Februar",
      "Mars",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Desember"
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des"
    ]
  });
});

// get all data in form and return object
function getFormData() {
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements)
    .map(function(k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    })
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });
  var data = {};
  fields.forEach(function(k) {
    data[k] = elements[k].value;
    var str = "";
    if (elements[k].type === "checkbox") {
      str = str + elements[k].checked + ", ";
      data[k] = str.slice(0, -2);
    } else if (elements[k].length) {
      for (var i = 0; i < elements[k].length; i++) {
        if (elements[k].item(i).checked) {
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  return data;
}

function handleFormSubmit(event) {
  event.preventDefault();
  var data = getFormData();
  var url = event.target.action;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    console.log(xhr);
    document.getElementById("thankyou_message").style.display = "block";
    document.getElementById("content-dissappear").style.display = "none";
    scroll(0, 0);
    return;
  };
  var encoded = Object.keys(data)
    .map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    })
    .join("&");
  xhr.send(encoded);
}

function loaded() {
  var form = document.getElementById("gform");
  form.addEventListener("submit", handleFormSubmit, false);
}
document.addEventListener("DOMContentLoaded", loaded, false);
