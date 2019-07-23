import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  localStorageData: any;
  constructor() { }

  ngOnInit() {
    this.localStorageData = JSON.parse(localStorage.getItem('data'));
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  });

    $(document).ready(function () {
      $('#example').DataTable();
    });

    $(document).ready(function () {
      $("#staffInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#staffTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    $(document).ready(function () {
      $("#ticketInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#ticketTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    $(document).ready(function () {
      $("#productInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#productTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });


    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview').css('background-image', 'url(' + reader.result + ')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imageUpload").change(function () {
      readURL(this);
    });

  }




}
