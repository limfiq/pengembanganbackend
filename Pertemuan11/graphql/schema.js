const {
  GraphQLObjectType, GraphQLString, GraphQLSchema,
  GraphQLList, GraphQLInt, GraphQLNonNull
} = require('graphql');
const { Mahasiswa, Matakuliah } = require('../models');
const { Rps } = require('../models');

const MahasiswaType = new GraphQLObjectType({
  name: 'Mahasiswa',
  fields: () => ({
    id: { type: GraphQLInt },
    nama: { type: GraphQLString },
    nim: { type: GraphQLString },
    matakuliahs: { //resolver
      type: new GraphQLList(MatakuliahType),
      resolve(parent) {
        return parent.getMatakuliahs();
      },
    },
  }),
});

const MatakuliahType = new GraphQLObjectType({
  name: 'Matakuliah',
  fields: () => ({
    id: { type: GraphQLInt },
    nama_matkul: { type: GraphQLString },
    kode_matkul: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    mahasiswa: {
      type: new GraphQLList(MahasiswaType),
      resolve() {
        return Mahasiswa.findAll();
      },
    },
    matakuliah: {
      type: new GraphQLList(MatakuliahType),
      resolve() {
        return Matakuliah.findAll();
      },
    },
    rps: {
      type: GraphQLString,
      args: {
        mahasiswaId: { type: GraphQLNonNull(GraphQLInt) },
        matakuliahId: { type: GraphQLNonNull(GraphQLInt) },
      },
      async resolve(_, { mahasiswaId, matakuliahId }) {
        const rpsRecord = await Rps.findOne({ where: { mahasiswaId, matakuliahId } });
        return rpsRecord ? rpsRecord.rps : null;
      },
    }
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMahasiswa: {
      type: MahasiswaType,
      args: {
        nama: { type: GraphQLNonNull(GraphQLString) },
        nim: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(_, args) {
        return Mahasiswa.create(args);
      },
    },
    addMatakuliah: {
      type: MatakuliahType,
      args: {
        nama_matkul: { type: GraphQLNonNull(GraphQLString) },
        kode_matkul: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(_, args) {
        return Matakuliah.create(args);
      },
    },
    editMahasiswa: {
      type: MahasiswaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        nama: { type: GraphQLString },
        nim: { type: GraphQLString },
      },
      resolve(_, args) {
        return Mahasiswa.update(args, { where: { id: args.id } })
          .then(() => Mahasiswa.findByPk(args.id));
      },
    },
    editMatakuliah: {
      type: MatakuliahType,
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        nama_matkul: { type: GraphQLString },
        kode_matkul: { type: GraphQLString },
      },
      resolve(_, args) {
        return Matakuliah.update(args, { where: { id: args.id } })
          .then(() => Matakuliah.findByPk(args.id));
      },
    },
    deleteMahasiswa: {
      type: MahasiswaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(_, args) {
        return Mahasiswa.destroy({ where: { id: args.id } })
          .then(() => Mahasiswa.findByPk(args.id));
      },
    },
    deleteMatakuliah: {
      type: MatakuliahType,
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(_, args) {
        return Matakuliah.destroy({ where: { id: args.id } })
          .then(() => Matakuliah.findByPk(args.id));
      },
    },
    addRps: {
      type: GraphQLString,
      args: {
        mahasiswaId: { type: GraphQLNonNull(GraphQLInt) },
        matakuliahId: { type: GraphQLNonNull(GraphQLInt) },
        rps: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, { mahasiswaId, matakuliahId, rps }) {
        // Assuming you have a Rps model with mahasiswaId, matakuliahId, rps fields
        // Optionally, check if mahasiswa and matakuliah exist
        const mahasiswa = await Mahasiswa.findByPk(mahasiswaId);
        const matakuliah = await Matakuliah.findByPk(matakuliahId);
        if (!mahasiswa) throw new Error('Mahasiswa not found');
        if (!matakuliah) throw new Error('Matakuliah not found');
        // Create or update RPS
        const [rpsRecord] = await Rps.upsert({ mahasiswaId, matakuliahId, rps });
        return rpsRecord.rps || rps;
      },
    },
    editRps: {
      type: GraphQLString,
      args: {
        mahasiswaId: { type: GraphQLNonNull(GraphQLInt) },
        matakuliahId: { type: GraphQLNonNull(GraphQLInt) },
        rps: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, { mahasiswaId, matakuliahId, rps }) {
        const rpsRecord = await Rps.findOne({ where: { mahasiswaId, matakuliahId } });
        if (!rpsRecord) throw new Error('RPS not found');
        rpsRecord.rps = rps;
        await rpsRecord.save();
        return rpsRecord.rps;
      },
    },
    deleteRps: {
      type: GraphQLString,
      args: {
        mahasiswaId: { type: GraphQLNonNull(GraphQLInt) },
        matakuliahId: { type: GraphQLNonNull(GraphQLInt) },
      },
      async resolve(_, { mahasiswaId, matakuliahId }) {
        const rpsRecord = await Rps.findOne({ where: { mahasiswaId, matakuliahId } });
        if (!rpsRecord) throw new Error('RPS not found');
        await rpsRecord.destroy();
        return 'RPS deleted successfully';
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });