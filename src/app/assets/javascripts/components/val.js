$("#form").validate({

    rules:{

        name:{
            required: true,
            minlength: 4,
            maxlength: 16,
        },

        email:{
            required: true,
            minlength: 6,
            maxlength: 50,
        },

        message:{
            required: true,
        },
    },

    messages:{

        name:{
            required: "Required",
            minlength: "At least 4 characters",
            maxlength: "max 16 characters",
        },

        mail:{
            required: "Required",
        },

        message:{
            required: "Required",
        },
    }

});
