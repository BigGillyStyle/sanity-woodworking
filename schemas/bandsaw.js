import voltages from './voltages'
import bandsawBlades from './bandsawBlades'
import bandsawGuides from './bandsawGuides'
import toolTypes from './toolTypes'

export default {
  name: 'bandsaw',
  title: 'Bandsaw',
  type: 'document',
  groups: [
    {
      name: 'electrical',
      title: 'Electrical',
    },
    {
      name: 'blade',
      title: 'Blade',
    },
  ],
  fields: [
    {
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'reference',
      to: [{type: 'manufacturer'}],
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'number',
      options: {
        list: [
          {title: '14"', value: 14},
          {title: '16"', value: 16},
          {title: '18"', value: 18},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resawCapacityInches',
      title: 'Resaw Capacity (inches)',
      type: 'number',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'dustPorts',
      title: 'Total Number of Dust Ports',
      type: 'number',
      options: {
        list: [1, 2],
      },
    },
    {
      name: 'motorHp110v',
      title: 'Motor (110V, HP)',
      type: 'number',
      group: 'electrical',
    },
    {
      name: 'motorHp220v',
      title: 'Motor (220V, HP)',
      type: 'number',
      group: 'electrical',
    },
    {
      name: 'voltage',
      title: 'Voltage',
      type: 'string',
      options: {
        list: [...voltages],
      },
      group: 'electrical',
    },
    {
      name: 'amps110',
      title: 'Amps (110V)',
      type: 'number',
      group: 'electrical',
    },
    {
      name: 'amps220',
      title: 'Amps (220V)',
      type: 'number',
      group: 'electrical',
    },
    {
      name: 'bladeMinSize',
      title: 'Blade (min size)',
      type: 'number',
      options: {
        list: [...bandsawBlades],
      },
      group: 'blade',
    },
    {
      name: 'bladeMaxSize',
      title: 'Blade (max size)',
      type: 'number',
      options: {
        list: [...bandsawBlades],
      },
      group: 'blade',
    },
    {
      name: 'bladeLengthInches',
      title: 'Blade Length (inches)',
      type: 'number',
      group: 'blade',
    },
    {
      name: 'bladeBrake',
      title: 'Blade Brake?',
      type: 'boolean',
      layout: 'checkbox',
      validation: (Rule) => Rule.required(),
      group: 'blade',
    },
    {
      name: 'bladeGuides',
      title: 'Blade Guides',
      type: 'string',
      options: {
        list: [...bandsawGuides],
      },
      group: 'blade',
    },
    {
      name: 'weightNetPounds',
      title: 'Weight (net, lbs)',
      type: 'number',
    },
    {
      name: 'weightShippingPounds',
      title: 'Weight (shipping, lbs)',
      type: 'number',
    },
    {
      name: 'active',
      title: 'Active?',
      type: 'boolean',
      layout: 'checkbox',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'toolType',
      title: 'Tool Type',
      type: 'string',
      options: {
        list: [...toolTypes],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
