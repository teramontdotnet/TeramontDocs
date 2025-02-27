/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Guía de Inicio',
      collapsed: false,
      items: [
        'getting_started/overview'
      ],
    },

    {
      type: 'category',
      label: 'Teramont Control Panel (TCP)',
      collapsed: true,
      items: [
        'tcp/dashboard',
        'tcp/console',
        'tcp/settings',
        'tcp/activity',
        'tcp/container',
        'tcp/database',
        'tcp/backups',
        'tcp/network',
        'tcp/importer',
        'tcp/scheduler',
        'tcp/subdomain',
        'tcp/proxy',
        'tcp/users',
        'tcp/splitter',
        'tcp/firewall',
        'tcp/startup',
        'tcp/properties',
        'tcp/votifier',
        'tcp/software',
        'tcp/players',
        'tcp/plugman',
        'tcp/worldman'
      ],
    },
    //{
    //  type: 'category',
    //  label: 'Teramont Control Panel (TCP)',
    //  collapsed: true,
    //  items: [
    //    'tcp_outdated/dashboard',
    //    'tcp_outdated/console',
    //    'tcp_outdated/settings',
    //    'tcp_outdated/files',
    //    'tcp_outdated/sub-users',
    //    'tcp_outdated/mysql',
    //    'tcp_outdated/backups',
    //    'tcp_outdated/activity',
    //    'tcp_outdated/players.md',
    //    'tcp_outdated/versions',
    //    'tcp_outdated/plugins',
    //    'tcp_outdated/reverse_proxy',
    //    'tcp_outdated/firewall'
    //],
    //},
    {
      type: 'category',
      label: 'Servidores de Minecraft',
      collapsed: true,
      items: [
        'minecraft_servers/aikars_flags'
      ],
    },
    // {
    //   type: 'category',
    //   label: 'VPS Hosting',
    //   collapsed: true,
    //   items: [
    //     'getting_started/overview'
    // ],
    // },
    {
      type: 'category',
      label: 'Servidores Dedicados',
      collapsed: true,
      items: [
        'bare_metal/loyalty_points',
        'bare_metal/overclocking'
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Facturación',
    //   collapsed: true,
    //   items: [
    //     'getting_started/overview'
    // ],
    // },
    {
      type: 'category',
      label: 'Extras',
      collapsed: true,
      items: [
        'extras/swap',
        'extras/plans'
      ],
    },
  ],
};


module.exports = sidebars;