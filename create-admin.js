// Script para criar usuário admin no Supabase
// Execute com: node create-admin.js

const SUPABASE_URL = 'https://xnumewhiljplsctumacm.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'COLE_SUA_SERVICE_ROLE_KEY_AQUI'; // Pegar em: https://supabase.com/dashboard/project/xnumewhiljplsctumacm/settings/api

const adminEmail = 'fernandoferrerobranco@gmail.com';
const adminPassword = '@FB4647Ffb';
const adminName = 'Fernando Branco';

async function createAdmin() {
  console.log('🔧 Criando usuário admin...');
  console.log(`📧 Email: ${adminEmail}`);
  console.log(`👤 Nome: ${adminName}`);
  console.log('');

  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
      },
      body: JSON.stringify({
        email: adminEmail,
        password: adminPassword,
        email_confirm: true, // Auto-confirmar email
        user_metadata: {
          name: adminName,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ Erro ao criar usuário:', error);
      
      if (error.message?.includes('already registered')) {
        console.log('');
        console.log('ℹ️  Este email já está registrado!');
        console.log('✅ Você já pode fazer login com essas credenciais.');
      }
      return;
    }

    const data = await response.json();
    console.log('✅ Usuário admin criado com sucesso!');
    console.log('');
    console.log('📋 Detalhes:');
    console.log(`   ID: ${data.id}`);
    console.log(`   Email: ${data.email}`);
    console.log(`   Nome: ${data.user_metadata?.name}`);
    console.log('');
    console.log('🎉 Agora você pode fazer login em:');
    console.log('   https://portfolio-fernando-branco.vercel.app/admin/login');
    console.log('');
    console.log('🔑 Credenciais:');
    console.log(`   Email: ${adminEmail}`);
    console.log(`   Senha: ${adminPassword}`);

  } catch (error) {
    console.error('❌ Erro ao conectar com Supabase:', error.message);
    console.log('');
    console.log('💡 Dicas:');
    console.log('   1. Verifique se a SERVICE_ROLE_KEY está correta');
    console.log('   2. Verifique sua conexão com a internet');
    console.log('   3. Tente criar o usuário pelo Dashboard do Supabase');
  }
}

// Verificar se a SERVICE_ROLE_KEY foi configurada
if (SUPABASE_SERVICE_ROLE_KEY === 'COLE_SUA_SERVICE_ROLE_KEY_AQUI') {
  console.log('❌ ERRO: Você precisa configurar a SERVICE_ROLE_KEY primeiro!');
  console.log('');
  console.log('📋 Como obter a SERVICE_ROLE_KEY:');
  console.log('   1. Acesse: https://supabase.com/dashboard/project/xnumewhiljplsctumacm/settings/api');
  console.log('   2. Copie a "service_role" key (comece com "eyJ...")');
  console.log('   3. Cole no arquivo create-admin.js na linha 5');
  console.log('   4. Execute novamente: node create-admin.js');
  console.log('');
  console.log('⚠️  ATENÇÃO: A SERVICE_ROLE_KEY é secreta! Não compartilhe com ninguém!');
  process.exit(1);
}

createAdmin();
