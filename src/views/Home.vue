
<script setup>
import Hero from "@/components/Hero.vue"
import HomeCarts from "@/components/HomeCarts.vue"
import JobListings from "@/components/JobListings.vue"
</script>


<template>
    <Hero title="shams with vuejs" subtitle="It fontentend mastering with vuejs" />
    <HomeCarts />
    <JobListings :limit = "3" :show-button="true"/>
</template>