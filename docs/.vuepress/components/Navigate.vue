<template>
  <div class="navigate_container">
    <div class="nav_search_container">
      <div class="search_title">
        <a href="">搜索</a><input class="search" type="text"/>
      </div>
    </div>

    <div class="nav_container">
      <div class="nav_item" v-for="nav in navList" :key="nav.title">
        <div class="nav_item_title">
          <b>{{ nav.title }}</b>
        </div>

        <div class="nav_item_main">
          <a
              class="nav_item_url"
              v-for="navItem in nav.arr"
              :key="navItem.id"
              :href="navItem.nav_url"
          >
            <div class="nav_item_text">
<!--              <img src="https://res.eemu.cn/LightPicture/2022/06/758fc8b1f2ca02b9.svg">-->
              {{ navItem.nav }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const {navList} = require("../api/navList");
export default {
  name: "Navigate",
  data() {
    return {
      navList: navList,
    };
  },
};
</script>

<style lang="stylus">
body {
  /*
  搜索框
  */

  .navigate_container {
    a {
      text-decoration: none;
    }

    .nav_search_container {
      width: 300px;
      margin: 50px auto;
      background-color: rgba(193, 167, 167, 0.589);
      border-radius: 20px;

      .search_title {
        a {
          display: inline-block;
          height: 34px;
          line-height: 30px;
          margin: 0 15px;
        }

        .search {
          width: 220px;
          height: 20px;
          padding: 10px;
          border: none;
          border-radius: 10px;
          text-decoration: none;
          background-color: rgba(233, 221, 221, 0);
        }

        .search:focus {
          outline: none;
        }
      }
    }

    /*
    导航区
    */

    .nav_container {
      display: flex;
      flex-wrap: wrap;
      //align-content: start;
      justify-content: center;
      align-content: flex-start;

      .nav_item {
        text-align: center;
        margin: 20px 40px;
        border-radius: 5px;

        .nav_item_title {
          margin: 10px;
        }

        .nav_item_main {
          padding: 20px;
          width: 300px;
          border-radius: 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
          box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);

          .nav_item_url {
            text-decoration: none;
          }

          .nav_item_url:hover {
            -webkit-animation: nav_item_url 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: nav_item_url 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }

          @keyframes nav_item_url {
            0% {
              -webkit-transform: translateZ(0) translateY(0);
              transform: translateZ(0) translateY(0);
            }

            100% {
              -webkit-transform: translateZ(20px) translateY(-20px);
              transform: translateZ(20px) translateY(-20px);
            }
          }

          @keyframes nav_item_url {
            0% {
              -webkit-transform: translateZ(0) translateY(0);
              transform: translateZ(0) translateY(0);
            }

            100% {
              -webkit-transform: translateZ(20px) translateY(-20px);
              transform: translateZ(20px) translateY(-20px);
            }
          }

          /*
              CSS gap 属性是用来设置网格行与列之间的间隙（gutters），该属性是 row-gap 和 column-gap 的简写形式。
          */

          .nav_item_text {
            width: 96.662px;
            line-height: 90px;
            border-radius: 20px;
            // border: 1px solid #E7E7E7;
            box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .nav_item_main:hover {
          box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
