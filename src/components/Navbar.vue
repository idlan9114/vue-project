<template>
  <nav class="navbar">
    <div class="logo">C1 OT</div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/character">Character</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: fle
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background-color: transparent; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.nav-links a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  margin-left: 2rem;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: white;
}

.nav-links a.router-link-exact-active {
  color: white;
  font-weight: 600;
}
</style>
