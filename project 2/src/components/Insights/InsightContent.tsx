import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';
import { KnowledgeCard } from './KnowledgeCard';

interface ContentProps {
  active: string;
}

export function InsightContent({ active }: ContentProps) {
  const renderSelfContent = () => (
    <div className="prose prose-gray max-w-none">
      <p className="mb-4">作为一个产品经理，我喜欢自己所打造的产品吗？</p>
      <p className="mb-4">消除我自己作为"创造者"的天然滤镜，在茫茫的类似产品中，他为什么要选择我所做的东西？</p>
      <p className="mb-4">他也会看到很多类似的产品，是什么让他突然感到惊喜？又是什么让他会在一瞬间想要放弃？</p>
      <p className="mb-4">当使用一个产品的时间长了，一开始的惊喜体验也逐渐变得平淡，怎么去对抗这种必然？</p>
      <p className="mb-4">能不能做到市面上没人做到、但是有价值的事？</p>
      <p className="mb-4">如果很有价值，为什么还没人做到？</p>
      <p>能不能克服，能不能努力做到？</p>
    </div>
  );

  const renderUsersContent = () => (
    <div className="prose prose-gray max-w-none">
      <p className="mb-4">丰富和强大一定需要基于「灵活」，否则丰富和强大就会变成「臃肿」。</p>
      <p className="mb-4">怎么变得丰富？实现别人有但是我们没有的，进一步实现别人也没有，只有我们有的。</p>
      <p className="mb-4">怎么变得灵活？每一个功能都有着清晰的定位和使用路径，你来了就能看到，看一眼就会使用，一旦使用就被吸引。</p>
      <p className="mb-4">之后你的使用体验逐渐变得稳定，对于操作也变得习惯。</p>
      <p>作为你的产品经理，我的职责是持续和坚定的创造更多会带给你新鲜感的美好体验，让你在稳定和习惯中也总有新的惊喜。</p>
    </div>
  );

  const renderProductContent = () => (
    <div className="space-y-4">
      <CollapsibleSection title="企业软件">
        <div className="space-y-4">
          <p>对于愿景：「双降」-企业开发成本&功能理解成本</p>
          <p>对于业务：打造快速、安全、灵活、强大的认证和认证配置流程</p>
          <p className="italic">"如果你一直问自己为什么这么做，你就更有可能构建出正确的产品。"</p>
          <p>常用反问：这个功能有助于以上目标的实现吗？具体是哪个目标？</p>
        </div>
      </CollapsibleSection>
      
      <CollapsibleSection title="需求洞察方法论">
        <div className="space-y-4">
          <p>让复杂的流程通情达理、让用户在使用流程时感到自己被支持、被理解</p>
          <p>评估客户需求时要安排与客户的直接沟通，了解用户整体的使用旅程。在了解目标流程的基础上明确期望流程与实际使用流程之间的偏差，重点关注用户感到不快的点；洞察这种不一致的原因，并在下一步的产品设计中作为CTA。</p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="需求评估指标">
        <div className="space-y-4">
          <p>流程每一步的「期望漏斗」——进行完一步之后的主要困惑点在哪里，如何针对这些困惑提供解决方案以降低「失望」的发生。</p>
          <p>"压垮骆驼的最后一根稻草"来源于细小「失望」的不断累积。</p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="产品功能排期">
        <div className="space-y-4">
          <p>考虑交付DDL，但不完全基于交付DDL。「拆版本」、「排期」正是为了解决这种短期压力与长期价值之间的权衡。</p>
          <p className="italic">"通过优先考虑价值和了解工作量，来确定第一个版本中可以包含的内容"</p>
        </div>
      </CollapsibleSection>
    </div>
  );

  const renderWorkContent = () => (
    <div className="space-y-4">
      <CollapsibleSection title="做有正外部性的人">
        <div className="space-y-4">
          <p>做有正外部性的人，追求真正的创新。</p>
          <p>始终保持对重要问题的敏感度，对于无伤大雅之事不要太纠结。</p>
          <p>静下来、慢下来，去思考真正的问题。</p>
          <p>工作场所中，大多数人急功近利、大多数人重视汇报大于解决真正的问题。在这两个问题的争斗中，选择前者确实可能会看起来更加利于被外界估价，但牺牲的是"做对的事"的初心，在这次选择中，似乎没有人受伤害，因为唯一牺牲的是正义，"避免人类所做之事陷入虚"的正义。</p>
          <p>牺牲正义对我而言不值得。能量远比表面正义更能令我感到幸福。</p>
        </div>
      </CollapsibleSection>
    </div>
  );

  const renderKnowledgeContent = () => (
    <div className="space-y-6">
      <KnowledgeCard
        title="我写了一个AI搜索引擎"
        description="探索如何构建一个基于AI的搜索引擎，包括架构设计、算法实现和性能优化的详细讲解。"
        url="https://juejin.cn/post/7384364492971343899"
      />
      <KnowledgeCard
        title="RAG的五种切分策略"
        description="深入分析检索增强生成（RAG）中的不同文本切分策略，以及它们在实际应用中的优劣比较。"
        url="https://blog.dailydoseofds.com/p/5-chunking-strategies-for-rag"
      />
    </div>
  );

  const renderMomentsContent = () => (
    <div className="space-y-4">
      <CollapsibleSection title="原则">
        <div className="space-y-4">
          <p className="italic">"为特定的人创造令人惊叹的产品，而不是为所有人创造平庸的产品"</p>
          <p>对交互体验没有那么重视的产品经理越来越多的结果是什么？"人人都是产品经理"？不——"人人都必须是产品经理"，因为只有有了一定的产品素养，才能用的明白这些"炫技式"的作品。</p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Done is better than perfect">
        <div className="space-y-4">
          <p>Pursuing perfect can be costly, and there's no standard of being perfect. Which means, in most occasions, pursuing perfect can be used as a formal excuse for pouring too much time into the unsure process.</p>
          <p className="font-medium">Move fast and break things.</p>
          <p>Instead of being soaked in the utopia of approaching one-stand perfect, concern baby-step breakthroughs, make safe changes, keep things alive first and then care about the growth, and approach perfect one inch a time.</p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="场景比功能更重要">
        <div className="space-y-4">
          <p>功能是特定场景的特定组合。</p>
          <p>永远先考虑方案整体的优越性：在确认面向新用户是最佳体验的情况下，再解决存量用户的适配问题，才会有更加坚定的底气。</p>
          <p>功能逻辑的分类和顺序并不是用户体验的分类的顺序。不用分类和理解的路径是最好的路径。"结构清晰、主次分明"是对于拆解和构建功能的人来说的，对于使用的人来说并不轻松。</p>
        </div>
      </CollapsibleSection>
    </div>
  );

  const contentMap: Record<string, () => JSX.Element> = {
    self: renderSelfContent,
    users: renderUsersContent,
    product: renderProductContent,
    work: renderWorkContent,
    knowledge: renderKnowledgeContent,
    moments: renderMomentsContent,
  };

  return (
    <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
      {contentMap[active]?.()}
    </div>
  );
}