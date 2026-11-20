import SectionHead from "../ui/SectionHead";
import FlowDiagram from "../ui/FlowDiagram";
import Arrow from "../ui/Arrow";
import { ai, articles } from "../data/content";

const nodes = [
  {
    id: "q",
    title: "Question",
    wide: true,
    subByGroup: {
      rag: "“What does the handbook say about leave?”",
      web: "“What changed in Gemini this week?”",
      direct: "“Explain embeddings in one line.”",
    },
  },
  { id: "router", title: "LLM router", sub: "LangGraph decides", icon: "langchain", iconName: "LangChain" },
  { id: "rag", title: "RAG", short: "RAG", sub: "FAISS vector store", group: "rag" },
  { id: "web", title: "Web search", short: "Web", sub: "Tavily, live results", group: "web" },
  { id: "direct", title: "Direct", short: "Direct", sub: "no retrieval needed", group: "direct" },
  { id: "answer", title: "Answer", sub: "Gemini writes it", icon: "gemini", iconName: "Gemini" },
];

const edges = [
  { from: "q", to: "router", step: 0 },
  ...["rag", "web", "direct"].flatMap((g) => [
    { from: "router", to: g, step: 1, group: g },
    { from: g, to: "answer", step: 2, group: g },
  ]),
];

const layouts = {
  wide: {
    height: 300,
    pos: { q: [0.13, 0.5], router: [0.38, 0.5], rag: [0.63, 0.14], web: [0.63, 0.5], direct: [0.63, 0.86], answer: [0.88, 0.5] },
  },
  narrow: {
    height: 440,
    pos: { q: [0.5, 0.07], router: [0.5, 0.33], rag: [0.17, 0.62], web: [0.5, 0.62], direct: [0.83, 0.62], answer: [0.5, 0.93] },
  },
};

const Ai = () => (
  <section id="ai" className="border-t py-24 hairline md:py-32">
    <div className="wrap">
      <SectionHead
        label="AI, by building"
        title="An agent that picks where answers come from"
        lede={ai.intro}
      >
        <a href={articles.agenticAi.url} target="_blank" rel="noreferrer" className="btn btn-secondary self-start md:self-auto">
          Read the write-up <Arrow diagonal />
        </a>
      </SectionHead>
      <FlowDiagram
        nodes={nodes}
        edges={edges}
        layouts={layouts}
        groups={["rag", "web", "direct"]}
        label="Diagram: a question goes to an LLM router built with LangGraph, which sends it to RAG over a FAISS vector store, to Tavily web search, or straight to the model; Gemini then writes the answer."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {ai.routes.map((r) => (
          <div key={r.k}>
            <p className="font-mono text-[13px] text-accent">{r.k}</p>
            <h3 className="mt-3 text-[17px] font-medium text-ink">{r.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap items-center gap-2 border-t pt-8 hairline">
        <span className="label mr-2">Learning now</span>
        {ai.learning.map((l) => (
          <span key={l} className="chip">{l}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Ai;
