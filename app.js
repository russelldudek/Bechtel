const scenarios = {
 engineering: {title:"Engineering handoff", observation:"Design-change context is dispersed across documents and handoffs.", decision:"Advance to bounded build", decisionClass:"ready", value:"Review cycle time; completeness of source linkage; rework or clarification events; retained use by workflow owners.", reuse:"A source-linked comparison pattern for controlled document and change review.", fields:[
 ["Workflow point","Design-change handoff","Compare defined source artifacts before accountable engineering review."],
 ["Business consequence","Rework and delay","Make missing context visible before it becomes downstream clarification."],
 ["Human authority","Engineer approves","AI proposes differences; accountable engineer determines disposition."],
 ["Data & evidence","Source-linked output","Every observation retains a path to the governing source."],
 ["Owner & adoption","Workflow lead","Named owner defines training, support, and exception feedback."],
 ["Delivery pattern","Bounded review assist","A repeatable pattern, not a general-purpose answer engine."]]},
 controls:{title:"Project controls", observation:"An agent can summarize schedule signals, but the baseline and owner of each decision must remain explicit.", decision:"Revise package before build", decisionClass:"revise", value:"Brief preparation time; source coverage; decision latency; false escalation rate; user correction patterns.", reuse:"A controlled risk-brief pattern that preserves baseline, source, owner, confidence, and escalation.", fields:[
 ["Workflow point","Weekly risk brief","Synthesize approved schedule, issue, and change inputs."],
 ["Business consequence","Late attention","Surface exceptions early enough for accountable action."],
 ["Human authority","Controls lead owns","AI identifies patterns; controls leadership validates meaning and action."],
 ["Data & evidence","Baseline incomplete","Define authoritative schedule and issue sources before build.","missing"],
 ["Owner & adoption","Project controls","Embed correction and exception feedback in the cadence."],
 ["Delivery pattern","Evidence-bound briefing","Retain citations, assumptions, and unresolved conflicts."]]},
 safety:{title:"Construction safety", observation:"AI can reduce preparation burden only when it strengthens—not obscures—field authority and stop-work obligations.", decision:"Hold for safety authority design", decisionClass:"hold", value:"Preparation time; hazard coverage; correction frequency; field comprehension; near-miss learning—without treating automation as approval.", reuse:"A preparation-assist pattern with explicit supervisor review, local conditions, and stop-work authority.", fields:[
 ["Workflow point","Pre-task planning support","Organize approved hazards, controls, work steps, and local inputs."],
 ["Business consequence","Missed context","Improve preparation completeness without automating accountable approval."],
 ["Human authority","Field authority unclear","Name supervisor, craft input, and stop-work decision rights.","missing"],
 ["Data & evidence","Approved safety sources","Use controlled procedures and site-specific conditions."],
 ["Owner & adoption","Safety + field leadership","Train for challenge, correction, and escalation—not passive acceptance."],
 ["Delivery pattern","Human-first preparation","No autonomous release or safety decision."]]},
 handover:{title:"Turnover & handover", observation:"Handover quality improves when completeness, provenance, exceptions, and accountable closure are visible.", decision:"Advance to bounded build", decisionClass:"ready", value:"Dossier completeness; exception closure time; duplicate search effort; turnover cycle time; customer acceptance questions.", reuse:"A completeness-and-exception pattern for structured turnover records and accountable closeout.", fields:[
 ["Workflow point","Dossier completeness","Compare required deliverables with current controlled records."],
 ["Business consequence","Late exceptions","Expose missing or inconsistent evidence before formal handover."],
 ["Human authority","Turnover lead closes","AI identifies gaps; accountable teams resolve and approve."],
 ["Data & evidence","Record provenance","Keep source, revision, requirement, and closure evidence visible."],
 ["Owner & adoption","Commissioning / IM","Place the review inside existing readiness cadence."],
 ["Delivery pattern","Completeness review","Reusable schema with project-specific requirements."]]
 }};
function renderScenario(key){const s=scenarios[key];document.querySelectorAll('.scenario-btn').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.scenario===key)));document.getElementById('scenario-title').textContent=s.title;document.getElementById('scenario-observation').textContent=s.observation;const badge=document.getElementById('decision-badge');badge.textContent=s.decision;badge.style.background=s.decisionClass==='ready'?'#e2f1ea':s.decisionClass==='revise'?'#f8e8db':'#fae0de';badge.style.color=s.decisionClass==='ready'?'#20725d':s.decisionClass==='revise'?'#a65d34':'#8e2f2b';document.getElementById('value-evidence').textContent=s.value;document.getElementById('reuse-destination').textContent=s.reuse;document.getElementById('package-grid').innerHTML=s.fields.map(f=>`<article class="package-field" data-state="${f[3]||'complete'}"><small>${f[0]}</small><strong>${f[1]}</strong><p>${f[2]}</p></article>`).join('');}
document.querySelectorAll('.scenario-btn').forEach(b=>b.addEventListener('click',()=>renderScenario(b.dataset.scenario)));document.getElementById('reset-review')?.addEventListener('click',()=>renderScenario('engineering'));renderScenario('engineering');
