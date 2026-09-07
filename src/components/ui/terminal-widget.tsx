'use client';

import React, { useState } from 'react';
import { Terminal, CheckCircle2, Copy, Check, Activity, FileCode, Play } from 'lucide-react';

type Tab = 'pipeline' | 'ansible' | 'telemetry';

export function TerminalWidget() {
  const [activeTab, setActiveTab] = useState<Tab>('pipeline');
  const [copied, setCopied] = useState(false);

  const getActiveContent = () => {
    if (activeTab === 'pipeline') {
      return `#!/usr/bin/env bash
# Jenkins Pipeline Automation • Muziris Softech (P) Ltd
git checkout main && verify-branch --target=production
docker build -t app/microservice:latest -f Dockerfile.prod .
docker push registry.internal/jfrog-artifactory/app:v2.4
liquibase update --changelog=db/changelog-master.xml
./deploy.sh --target=production --cluster=linux-nodes
# RESULT: Deployment cycle reduced by 40% (Zero Downtime)`;
    } else if (activeTab === 'ansible') {
      return `---
# Ansible Configuration Management (Ubuntu & CentOS)
- name: Automate Linux Host Provisioning & Deployment
  hosts: production_nodes
  become: yes
  tasks:
    - name: Ensure Docker daemon & dependencies active
      systemd: name=docker state=started enabled=yes
    - name: Synchronize application containers
      community.docker.docker_container:
        name: api_service
        image: jfrog.internal/api:v2.4
        state: started
        restart_policy: always
# RESULT: Manual configuration errors reduced by 60%`;
    } else {
      return `[SYSTEM TELEMETRY]
HOST: prod-linux-cluster (Ubuntu / CentOS)
CI/CD: Jenkins Continuous Integration [HEALTHY]
ARTIFACTS: JFrog Artifactory [ONLINE - 99.98% UPTIME]
DATABASE: Liquibase Schema Versioning [SYNCHRONIZED]
MONITORING: Grafana Dashboards [ACTIVE - 24 Metrics]
LOGGING: ELK Stack (Elasticsearch, Logstash, Kibana) [STREAMING]
STATUS: Production workloads nominal across microservices`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl shadow-cyan-950/40 text-left font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/90 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/90 border border-red-600/60 inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500/90 border border-yellow-600/60 inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500/90 border border-emerald-600/60 inline-block"></span>
          </div>
          <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5 hidden sm:flex">
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            <span>anandhu@production-node: ~</span>
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-lg border border-slate-800 text-[11px]">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'pipeline'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="h-3 w-3" />
            <span>pipeline.sh</span>
          </button>
          <button
            onClick={() => setActiveTab('ansible')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'ansible'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="h-3 w-3" />
            <span>ansible.yml</span>
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'telemetry'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="h-3 w-3" />
            <span>telemetry.log</span>
          </button>
        </div>

        {/* Copy snippet button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Copy terminal contents"
          aria-label="Copy terminal text"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {/* Terminal Content Area */}
      <div className="p-4 sm:p-5 text-slate-300 leading-relaxed overflow-x-auto min-h-[270px] bg-[#070b14]/95">
        {activeTab === 'pipeline' && (
          <div className="space-y-2">
            <div className="text-slate-500 flex items-center gap-2">
              <span># Jenkins CI/CD Pipeline Automation &bull; Muziris Softech (P) Ltd</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-cyan-400 font-bold">$</span>
              <span className="text-emerald-400">./deploy-microservices.sh</span>
              <span className="text-amber-300">--env=production</span>
              <span className="text-slate-400">--verify</span>
            </div>

            <div className="pl-3 sm:pl-4 space-y-1.5 border-l border-slate-800/80 my-2">
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-cyan-300">[STAGE 1/4] Git VCS:</strong> Branch checkout verified with release tags
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-cyan-300">[STAGE 2/4] Docker:</strong> Multi-stage build &amp; pushed to JFrog Artifactory
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-cyan-300">[STAGE 3/4] Liquibase:</strong> Automated schema migration executed &amp; verified
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-cyan-300">[STAGE 4/4] Automated Deploy:</strong> Continuous deployment completed in 2m 14s
                </span>
              </div>
            </div>

            <div className="pt-2 px-3 py-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 flex items-center justify-between text-xs">
              <span className="font-semibold">&bull; DEPLOYMENT IMPACT:</span>
              <span className="font-bold text-white">-40% Cycle Time Reduction</span>
            </div>
          </div>
        )}

        {activeTab === 'ansible' && (
          <div className="space-y-1.5">
            <div className="text-slate-500"># Configuration Management Playbook (Ubuntu &amp; CentOS)</div>
            <div>
              <span className="text-indigo-400">- name:</span> Automate Linux Host Provisioning &amp; Deployment
            </div>
            <div className="pl-4">
              <span className="text-indigo-400">hosts:</span> <span className="text-amber-300">production_nodes</span>
            </div>
            <div className="pl-4">
              <span className="text-indigo-400">tasks:</span>
            </div>
            <div className="pl-8 text-slate-300">
              - <span className="text-cyan-400">name:</span> Ensure Docker daemon &amp; dependencies installed
            </div>
            <div className="pl-8 text-slate-300">
              - <span className="text-cyan-400">name:</span> Synchronize application containers across hosts
            </div>
            <div className="pl-8 text-slate-300">
              - <span className="text-cyan-400">name:</span> Configure centralized ELK log-shipper
            </div>
            <div className="pt-3 px-3 py-2 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 flex items-center justify-between text-xs">
              <span className="font-semibold">&bull; AUTOMATION IMPACT:</span>
              <span className="font-bold text-white">-60% Configuration Errors</span>
            </div>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="space-y-3">
            <div className="text-slate-500 flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-cyan-400" />
              <span># Cluster Health &amp; Observability Metrics (Grafana + ELK Stack)</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 pt-1 text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase">CI/CD Engine</div>
                <div className="text-emerald-400 font-bold text-xs sm:text-sm mt-0.5">Jenkins &bull; Operational</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase">Artifact Registry</div>
                <div className="text-cyan-400 font-bold text-xs sm:text-sm mt-0.5">JFrog Artifactory &bull; Synced</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase">DB Migrations</div>
                <div className="text-indigo-400 font-bold text-xs sm:text-sm mt-0.5">Liquibase &bull; Verified</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase">Monitoring Stack</div>
                <div className="text-emerald-400 font-bold text-xs sm:text-sm mt-0.5">Grafana + ELK &bull; Healthy</div>
              </div>
            </div>
            <div className="pt-1 text-[11px] text-slate-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>All production environments running stably with automated release governance.</span>
            </div>
          </div>
        )}

        {/* Blinking prompt line */}
        <div className="pt-4 flex items-center gap-2 text-slate-400 border-t border-slate-800/80 mt-3">
          <span className="text-cyan-400 font-bold">anandhu@production:~$</span>
          <span className="text-slate-300 text-xs">status: ready for new deployment</span>
          <span className="terminal-cursor inline-block w-2 h-4 bg-cyan-400"></span>
        </div>
      </div>
    </div>
  );
}
