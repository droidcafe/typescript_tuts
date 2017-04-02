var type_string: string = 'string',
    type_bool: boolean = true;


interface type{
  type_string;
  type_bool;
}

function type_check(type_type : type) : void{
  console.log('type '+type_type.type_string +' is  '+type_type.type_bool) ;
}

var s = {
  type_string: "nirmal",
  type_bool : true
};
type_check(s);
