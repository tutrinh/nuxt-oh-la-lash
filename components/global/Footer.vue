<template>
  <div class="footer font-alata py-4">
    <div class="container border-top py-4">
      <div class="row">
        <div class="col">
          <NuxtLink to="/">
            <img class="logo--small" src="images/hellotu-logo.svg" alt="Personal site of Tu Trinh" />
          </NuxtLink>
        </div>
        <div class="col"></div>
        <div class="col">
          <b-nav vertical class="text-right">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/styleguide">Styleguide</b-nav-item>
            <b-nav-item to="/articles">Articles</b-nav-item>
            <b-nav-item>Privacy Policy</b-nav-item>
          </b-nav>
        </div>
      </div>
      <div class="my-3">
        <div class="col">
          <p
            class="small text-right"
          >Copyright &copy; {{year}} tinytouchgames.com & hellotu.com All rights reserved.</p>
          <a href="#">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
            >
              <path
                d="M14.977 1.467a.5.5 0 00-.87-.301 2.559 2.559 0 01-1.226.763A3.441 3.441 0 0010.526 1a3.539 3.539 0 00-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 00-.916-.048C.004 3.373-.157 5.407.604 7.139 1.27 8.656 2.61 9.864 4.51 10.665 3.647 11.276 2.194 12 .5 12a.5.5 0 00-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236.193-.546.232-1.178.177-2.006z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0h15l-1.066 12.847L7.5 15l-6.434-2.153L0 0zm10.98 2.995H4.02v.998h5.966v1.996H6.009v.998h3.977v2.136L7.5 9.955l-2.486-.832V7.986H4.02v1.857l3.48 1.164 3.48-1.164V2.995z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
            >
              <path
                d="M2.717 1H.5a.5.5 0 00-.432.752l7 12a.5.5 0 00.864 0l7-12A.5.5 0 0014.5 1h-2.217L7.5 8.972 2.717 1z"
                fill="currentColor"
              />
              <path
                d="M11.117 1H8.19L7.5 2.382 6.809 1H3.883L7.5 7.028 11.117 1z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 2a.5.5 0 01.429.243l1.527 2.545.613-1.042a.5.5 0 01.862 0l5 8.5A.5.5 0 0114.5 13H.5a.5.5 0 01-.429-.757l6-10A.5.5 0 016.5 2zM5.374 12h6.243L8.465 6.746 5.375 12zM7.88 5.77L4.214 12h-2.83L6.5 3.472 7.879 5.77zm1.163-.005L12.783 12h.843L9.5 4.986l-.458.779z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0h15l-1.066 12.847L7.5 15l-6.434-2.153L0 0zm10.98 2.995H4.02v3.992h5.966v2.136L7.5 9.955l-2.486-.832V7.986H4.02v1.857l3.48 1.164 3.48-1.164V5.989H5.014V3.993h5.966v-.998z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 0H0v15h15V0zM8 8a2 2 0 012-2h1.167C12.179 6 13 6.82 13 7.833V8h-1v-.167A.833.833 0 0011.167 7H10a1 1 0 000 2h1a2 2 0 110 4h-1a2 2 0 01-2-2h1a1 1 0 001 1h1a1 1 0 100-2h-1a2 2 0 01-2-2zM6 6v5a1 1 0 11-2 0H3a2 2 0 104 0V6H6z"
                fill="currentColor"
              />
            </svg>
          </a>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
          >
            <path d="M2 1h5v1H2V1zm6 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="currentColor" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 12.5A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3h-12A1.5 1.5 0 000 4.5v8zM9.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 7V1h1v6h6v1H8v6H7V8H1V7h6z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8H1V7h13v1z" fill="currentColor" />
          </svg>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.793 7.5L1.146 1.854l.708-.708L7.5 6.793l5.646-5.647.708.708L8.207 7.5l5.647 5.646-.707.707L7.5 8.207l-5.646 5.646-.708-.707L6.793 7.5z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      //year: ''
    };
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
