(()=>{var e=class{constructor(){this.onDOMLoaded=this.onDOMLoaded.bind(this),this.init=this.init.bind(this),this.filterTopicNodes=this.filterTopicNodes.bind(this)}filterTopicNodes(o){let i=o.target.value.trim().toLowerCase();if(!i){document.querySelectorAll("[data-topic]").forEach(t=>t.classList.remove("hidden"));return}document.querySelectorAll("[data-topic]").forEach(t=>t.classList.add("hidden")),document.querySelectorAll(`[data-topic*="${i}"]`).forEach(t=>t.classList.remove("hidden"))}onDOMLoaded(){document.getElementById("search-topic-input").addEventListener("keyup",this.filterTopicNodes)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}},d=new e;d.init();})();
//# sourceMappingURL=topics.js.map
