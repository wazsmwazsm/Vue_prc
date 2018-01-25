const NotFound = { template: '<p>Page not found</p>' };
const Home = { template: '<p>home page</p>' };
const About = { template: '<p>about page</p>' };

const routes = {
    '/': Home,
    '/about': About
};

var vm = new Vue({
    el: '#app',
    data: {
        currentRoute : window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound;
        }
    },
    // h 是 createElement 的简写
    render (h) { return h(this.ViewComponent) }
});
