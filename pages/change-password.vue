<template>
  <div>
    <div class="container-fluid text-white min-vh-80 tops-auth">
        <h4 class="text-center">Change Password</h4>
        <form>
            <div class="row">
                <div class="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <div class="form-group">
                        <label for="">Current Password</label>
                        <input type="password" class="form-control" name="current_password" />
                    </div>
                    <div class="form-group">
                        <label for="">New Password</label>
                        <input type="password" class="form-control" name="password" />
                    </div>
                    <div class="form-group">
                        <label for="">Confirm Password</label>
                        <input type="password" class="form-control" name="password_confirmation" />
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn disabled bg-sv-primary btn-block text-sv-primary text-center">Change Password</button>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
            </div>
        </form>
    </div><!-- container-fluid -->
  </div>
</template>

<script>
export default {
  name: 'change-password',
  layout: 'single'
}
</script>

<style>
    .min-vh-50{
      min-height: 80vh;
    }
    .form-control {
        background-color: transparent;
        color: #FFFFFF;
    }

    input:focus{
        background-color: transparent;
    }

    .input-container{
        position:relative;
        margin-bottom:25px;
    }
    .input-container label{
        position:absolute;
        top:0px;
        left:0px;
        font-size:16px;
        color:#fff;
        pointer-event:none;
        transition: all 0.5s ease-in-out;
    }

    .input-container input{
        border:0;
        border-bottom:1px solid #555;
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
        color:#fff;
    }
    .input-container input:focus{
        border:none;
        outline:0;
        border-bottom:1px solid #067a23;
        background-color: transparent;
        color: white;
    }

    .input-container input:focus ~ label,
    .input-container input:valid ~ label{
    top:-12px;
    font-size:12px;
    }

    .tops-auth{
      padding-top: 114px;
    }

    .footer{
      display: none;
    }
</style>
