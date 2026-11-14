<template>
	<div class="app">
		<h2>求和為:{{sum}}</h2>
		<h2>名字為:{{person.name}}</h2>
		<h2>年齡為:{{person.age}}</h2>
		<h2>汽車為:{{car}}</h2>
		<button @click="changeSum">sum+1</button>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年齡</button>
		<button @click="changePerson">修改整個人</button>
		<span> </span>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改顏色</button>
		<button @click="changeEngine">修改引擎</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import {ref,reactive,shallowRef,shallowReactive} from "vue";

	// 數據
	let sum = shallowRef(0)
	let person = shallowRef({
		name:'張三',
		age:18
	})
	let car = shallowReactive({
		brand:'賓士',
		options:{
			color:'紅色',
			engine:'v8'
		}
	})

	// 方法
	function changeSum(){
		sum.value += 1
	}
	function changeName(){
		person.value.name = '李四'
	}
	function changeAge(){
		person.value.age += 1
	}
	function changePerson(){
		person.value = {name:'tony',age:100}
	}
	/* ********************* */
	function changeBrand(){
		car.brand = '寶馬'
	}
	function changeColor(){
		car.options.color = '黃色'
	}
	function changeEngine(){
		car.options.engine = 'v12'
	}
</script>

<style>
	.app{
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
	.button{
		margin-right: 0 5px;
	}
</style>