import Vue from "vue";
import VueRouter from "vue-router";
import VagaUnica from "@/views/VagaUnica/index.vue";
import Home from "@/views/Home/index.vue";
import QuemSomos from "@/views/QuemSomos/index.vue";
import VagasAbertas from "@/views/VagasAbertas/index.vue";
import PoliticaPrivacidade from "@/views/PoliticaPrivacidade/index.vue";
import TermosDeUso from "@/views/TermosDeUso/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        // rota de não encontrado
        path: "*",
        redirect: {name: "404"},
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/404"),
        meta: {
            title: "404",
        },
    },
    {
        path: "/:cliente_slug",
        name: "Home",
        component: Home,
        meta: {
            title: "",
        },
    },
    {
        path: "/:cliente_slug/quem-somos",
        name: "QuemSomos",
        component: QuemSomos,
        meta: {
            title: "",
        },
    },
    {
        path: "/:cliente_slug/vagas-abertas",
        name: "VagasAbertas",
        component: VagasAbertas,
        meta: {
            title: "",
        },
    },
    {
        path: "/:cliente_slug/politica-de-privacidade",
        name: "PoliticaPrivacidade",
        component: PoliticaPrivacidade,
        meta: {
            title: "",
        },
    },
    {
        path: "/:cliente_slug/termos-de-uso",
        name: "TermosDeUso",
        component: TermosDeUso,
        meta: {
            title: "",
        },
    },
    {
        path: "/:cliente_slug/:vaga_aberta_id/:vaga_slug",
        name: "VagaUnica",
        component: VagaUnica,
        meta: {
            title: "",
        },
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

router.afterEach((to) => {
    document.title = `VAGAS - MyBP`;
    if (to.meta.title) {
        document.title = `${document.title} - ${to.meta.title}`;
    }
});


export default router;
