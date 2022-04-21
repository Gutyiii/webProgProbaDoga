class Szakdoga{
    constructor(node, elem, index){
        this.node=node;
        this.szakdogacime = this.node.children(".szakdogacime");
        this.githublink = this.node.children(".githublink");
        this.oldallink = this.node.children(".oldallink");
        this.tagok = this.node.children(".tagok");
        this.node.children(".modosit").on("click", () => {
            this.KattintasTriggerModosit();
        });
        this.node.children(".torol").on("click", () => {
            this.KattintasTriggerTorol();
        });
        this.elem = elem;
        this.elem.index = index;
        this.setAdat(this.elem);
    }

    setAdat(ertek){
        this.szakdogacime.html(ertek.szakdoga_nev);
        this.githublink.html(ertek.githublink);
        this.oldallink.html(ertek.oldallink);
        this.tagok.html(ertek.tagokneve);
    }

    KattintasTriggerModosit() {
        let esemeny = new CustomEvent("modosit", { detail: this.elem });
        window.dispatchEvent(esemeny);
    }

    KattintasTriggerTorol() {
        let esemeny = new CustomEvent("torol", { detail: this.elem });
        window.dispatchEvent(esemeny);
    }
}