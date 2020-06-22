<template>
<div>
            <b-card bg-variant="light">
                <b-form-group >

                   
               
                <b-img left :src="photoURL" rounded py-auto alt="Left image"></b-img>
                
                

                <b-form-group
                    label-cols-sm="3"
                    label="Name:"
                    label-align-sm="right"
                    label-for="name"
                >
                    <b-form-input id="name" v-model="name" class="mayusculas"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Email"
                    label-align-sm="right"
                    label-for="email"
                >
                    <b-form-input id="email" v-model="email"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Password:"
                    label-align-sm="right"
                    label-for="password"
                >
                    <b-form-input type="password" v-model="clave" id="password"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Imagen de perfil:"
                    label-align-sm="right"
                    label-for="photoURL"
                >
                    <b-form-input id="photoURL" v-model="photoURL"></b-form-input><br>
                    <p class="small">Recomendamos usar <a href="https://es.gravatar.com/">Gravatar</a> para desplegar imágenes de perfil.</p>
                </b-form-group>

                
                </b-form-group>
            </b-card>
            </div>

</template>

<script>


export default {
    name: 'Usercard',



}
</script>

<style>

</style>